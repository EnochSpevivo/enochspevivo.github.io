---
title: Work Samples
---

<style>
    .designs-container, .row {
        display: flex;
        justify-content: space-between;
    }

    .work-sample__container {
        flex-basis: 48%;
        max-height: 38vh;
        cursor: pointer;
        border-radius: 5px;
        position: relative;
    }

    .designs-container {
        flex-wrap: wrap;
    }

    .row {
        margin-bottom: 25px;
    }

    .work-sample {
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }

    .work-sample__overlay {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s;
    }

    .work-sample__web, .work-sample__desktop-view, .work-sample__mobile-view {
        display: flex;
        flex-basis: 50%;
        align-items: center;
        justify-content: center;
    }

    .work-sample__desktop-view {
        border-right: 2px solid white;
    }

    .work-sample__solo {
        border-right: 0;
        border-left: 0;
        flex-basis: 100%;
    }

    .work-sample__overlay--show {
        opacity: 1;
    }

    .work-sample__container i {
        font-size: 60px;
        color: white;
    }

    .work-sample__container a:link, work-sample__container a:hover {
        text-decoration: none;
    }

    @media only screen and (max-width: 600px) {
        .designs-container {
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: center;
        }

        .row {
            max-width: 100%;
            flex-direction: column;
            align-items: center;
            margin-bottom: 0;
        }

        .work-sample__container {
            margin-bottom: 25px;
            max-height: 46vh;
            overflow-y: hidden;
        }
    }
</style>

## web design

### glo

- [glo](https://glo.com/) is an online health & wellness website dedicated to providing high quality yoga videos & lectures to subscribers. these are just a few of the designs i developed & implemented on the production site. **note:** some of these designs are no longer live, so provided below are screenshots.

[comment]: <> (DRY up this implementation, use Jekyll meta data)

<div class="designs-container">
    <div class="row">
        <div class="work-sample__container">
            <img class="work-sample" src="/assets/img/work-samples/glo/thumbnails/teacher-desktop.png" alt="glo teacher work sample" title="glo teacher work sample">
            <div class="work-sample__overlay">
                <a class="work-sample__desktop-view" href="https://i.imgur.com/sSl1Um1.png" target="_blank">
                    <i class="fas fa-desktop"></i>
                </a>
                <a class="work-sample__mobile-view" href="https://i.imgur.com/LjygdTI.png" target="_blank">
                    <i class="fas fa-mobile-alt"></i>
                </a>
            </div>
        </div>
        <div class="work-sample__container">
            <img class="work-sample" src="/assets/img/work-samples/glo/thumbnails/courses-desktop.png" alt="glo teacher work sample" title="glo teacher work sample">
            <div class="work-sample__overlay">
                <a href="https://i.imgur.com/2Ifm483.jpg" class="work-sample__desktop-view" target="_blank">
                    <i class="fas fa-desktop"></i>
                </a>
                <a href="https://i.imgur.com/X6D1NTd.png" class="work-sample__mobile-view" target="_blank">
                    <i class="fas fa-mobile-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="work-sample__container">
            <img class="work-sample" src="/assets/img/work-samples/glo/thumbnails/cancel-desktop.png" alt="glo cancel work sample" title="glo cancel work sample">
            <div class="work-sample__overlay">
                <a href="https://i.imgur.com/ird04RC.png" class="work-sample__desktop-view" target="_blank">
                    <i class="fas fa-desktop"></i>
                </a>
                <a href="https://i.imgur.com/wznLJQs.png" class="work-sample__mobile-view" target="_blank">
                    <i class="fas fa-mobile-alt"></i>
                </a>
            </div>
        </div>
        <div class="work-sample__container">
            <img class="work-sample" src="/assets/img/work-samples/glo/thumbnails/search-desktop.png" alt="glo search work sample" title="glo search work sample">
            <div class="work-sample__overlay">
                <a href="https://i.imgur.com/nzMOMIJ.png"  class="work-sample__desktop-view" target="_blank">
                    <i class="fas fa-desktop"></i>
                </a>
                <a href="#" class="work-sample__mobile-view" target="_blank">
                    <i class="fas fa-mobile-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="work-sample__container">
            <img class="work-sample" src="/assets/img/work-samples/glo/thumbnails/settings-desktop.png" alt="glo settings work sample" title="glo settings work sample">
            <div class="work-sample__overlay">
                <a href="https://i.imgur.com/AsBZnZ6.png" class="work-sample__desktop-view" target="_blank">
                    <i class="fas fa-desktop"></i>
                </a>
                <a href="https://i.imgur.com/p2NbMVP.png" class="work-sample__mobile-view" target="_blank">
                    <i class="fas fa-mobile-alt"></i>
                </a>
            </div>
        </div>
        <div class="work-sample__container">
            <img class="work-sample" src="/assets/img/work-samples/glo/thumbnails/career-desktop.png" alt="glo career work sample" title="glo career work sample">
            <div class="work-sample__overlay">
                <a href="https://i.imgur.com/PFPUF7A.png" class="work-sample__desktop-view" target="_blank">
                    <i class="fas fa-desktop"></i>
                </a>
                <a href="https://i.imgur.com/7LJpC8M.png" class="work-sample__mobile-view" target="_blank">
                    <i class="fas fa-mobile-alt"></i>
                </a>
            </div>
        </div>
    </div>
</div>

### fls international

- [FLS International](https://www.flsinternationalonline.net/) is an ESL school based in Los Angeles, CA. While working there, I helped them develop critical web app features as part of their transition to remote learning, particularly their student proficiency test.

<div class="designs-container">
    <div class="row">
        <div class="work-sample__container">
            <img class="work-sample" src="/assets/img/work-samples/fls/thumbnails/proficiency-test.png" alt="proficiency test thumbnail">
            <a class="work-sample__overlay" href="https://fls-international.web.app/" target="_blank">
                <div class="work-sample__web work-sample__solo">
                    <i class="fas fa-globe"></i>
                </div>
            </a>
        </div>
    </div>
</div>

<script>
    var workSampleContainers = document.querySelectorAll('.work-sample__container');

    workSampleContainers.forEach(workSampleContainer => {
        workSampleContainer.addEventListener('mouseover', (e) => {
            e.currentTarget.querySelector('.work-sample__overlay').classList.add('work-sample__overlay--show');
        });

        workSampleContainer.addEventListener('mouseout', (e) => {
            e.currentTarget.querySelector('.work-sample__overlay').classList.remove('work-sample__overlay--show');
        });
    });
</script>
