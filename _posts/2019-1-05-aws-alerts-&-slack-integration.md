---
layout: post
title:  "aws alerts & slack integration"
date:   2019-1-05
categories: aws elasticache slack lambda
---

i used to work on the [glo](https://www.glo.com/) team, and while there, we used [amazon elasticache](https://aws.amazon.com/elasticache/) for all of our caching needs. the decision to move to elasticache happened during my tenure, shortly after we had issues with our locally hosted [redis](https://redis.io/) service crashing. we decided to delegate responsibility for cache hosting onto amazon.  as a member of the web team, i took it upon myself to a) set up our elasticache settings and b) implement a slack integration that would chirp out helpful status alerts based on certain metrics.

## setting up elasticache

our elasticache needs were not extensive. we wanted two redis clusters, one for our web team and the other for our services team. behind the scenes, this required minor reconfiguration of our `env` files on both the web and services end, such that the apps now pointed to amazon. in the interest of making our app's bootstrapping as easily reproducible as possible, i set up a [cloudformation](https://aws.amazon.com/cloudformation/) template that included the following lines:

```yml
 EnableClusterA:
    Type: String
    Description: 'Enable or disable Cluster A. Disabling this cluster will remove both replicated & non-replicated versions of the cluster.'
    AllowedValues: [true, false]
    Default: true
  EnableClusterB:
    Type: String
    Description: 'Enable or disable Cluster B. Disabling this cluster will remove both replicated & non-replicated versions of the cluster.'
    AllowedValues: [true, false]
    Default: true
```

in other words, instead of manually spinning up our elasticache clusters through the elasticache dashboard, we relied on cloudformation to generate clusters per my template.

## slack integration with amazon lambda

i set up [cloudwatch](https://aws.amazon.com/cloudwatch/) to watch our elasticache clusters for the health of metrics including cpu utilization and cache evictions. with input from the team, i determined healthy, unhealthy, and dangerous levels for these metrics, and then set up cloudwatch alerts to watch for these numbers. when any of these thresholds were crossed, [sns](https://aws.amazon.com/sns/) would fire off a message to [lambda](https://aws.amazon.com/lambda/), where it would be received by a node script i wrote.

```js
const https = require('https'),
	url = require('url'),
	slackUrl = process.env.slackUrl,
	slackChannel = process.env.slackChannel,
	slackReqOpts = url.parse(slackUrl);

slackReqOpts.method = 'POST';
slackReqOpts.headers = {'Content-Type': 'application/json'};

exports.handler = function(event, context) {
	let message = JSON.parse(event.Records[0].Sns.Message),
		slackTitle = message.Trigger.Namespace  + ' - ' + message.Trigger.MetricName,
		status = message.AlarmDescription || 'Warning';

	switch (message.NewStateValue) {
		case 'OK':
			status = 'Good';
			break;
		case 'ALARM':
			status = 'Warning';
			break;
	}

	let	slackMessage = {
			text: status.toLowerCase() === 'danger' ? '<!channel>' : '',
			channel: slackChannel,
		    attachments: [{
	            fallback: message.NewStateReason,
	            color: status.toLowerCase(),
	            title: slackTitle,
				text: message.NewStateReason,
	            fields: [
	                {
	                    title: "Node",
	                    value: message.Trigger.Dimensions[0].value,
						short: true
	                }, {
						title: "Status",
						value: status,
						short: true
					},
					{
						title: "Region",
						value: message.Region,
						short: true
					}
	            ]
	        }]
		};

	if (message) {
		var req = https.request(slackReqOpts, (res) => {
			if (res.statusCode === 200) {
				context.succeed('posted to slack');
			} else {
				context.fail('status code: ' + res.statusCode);
			}
		});

		req.on('error', (e) => {
			context.fail(e.message);
		});

		req.write(JSON.stringify(slackMessage));
		req.end();
	}
};
```

## the final product

!['good' status](https://i.imgur.com/y7Xu9dw.png)
!['warning' status](https://i.imgur.com/Y918qdj.png)

after all the above leg work, these messages get piped into a special `ops-alerts` slack channel. the net result of all this is that those on pager duty (including myself) are able to immediately see if anything's gone awry with our elasticache service. the above pattern has also been used for similar alerts with our other amazon web services, and has generally helped the sanity of anyone trying to stay ahead of potential issues within our app.
