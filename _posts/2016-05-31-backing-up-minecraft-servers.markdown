---
layout: post
title:  "backing up minecraft servers"
date:   2016-05-31
categories: minecraft, snippets
---

recently, my roommate and i have been playing a lot of minecraft. i've been hosting a local server for us, and keeping all the files stored on my main computer. however, idiots that we are, there's more than a few times that we need to roll back to previous versions.  luckily, server back ups are as simple as copying the `world` folder. so, i wrote this tiny bash script to do just that:

```bash
#!/bin/bash

today=$(date +%Y-%m-%d);
currentTime=$(date +%T);

mkdir -p ./backups/$today/$currentTime;
cp -r ./world/* ./backups/$today/$currentTime;
```

this little snippet is run in the command line using `backup-world.sh`. it looks in the current directoy (i.e., the server folder) for a folder called `backups` and creates inside of it a folder with today's date, and inside that a folder with a timestamp. multiple back ups on the same day create new folders in the same date folder with different timestamps.

the script then copies all the files in the `world` folder to the `currentTime` folder. and that, as they say, is that. quick, dirty, functional - just the way i like it.
