import React, { useState } from 'react';

import Header from '../components/Header';
import ViewWrapper from '../components/ViewWrapper';

import aTrueProfessionalImg from '../assets/about/a-true-professional.jpg';
import slightlyLessProfessionalImg from '../assets/about/slightly-less-professional.jpg';

const About = () => {
    return (
        <ViewWrapper viewName="work">
            <Header viewTitle={`about`} subtitle={'who is this guy, anyway?'} />

            <div className="flex flex-col items-center md:block">
                <div
                    className="animate__animated animate__fadeInUp flex flex-col gap-y-2 float-left max-w-[240px] text-center mb-2 md:mb-0 md:mr-6"
                    style={{ animationDelay: '0.2s' }}
                >
                    <img src={aTrueProfessionalImg} className="rounded-md" />

                    <span className="text-[12px]">
                        <em>back in 2018, bright-eyed and bushy-tailed.</em>
                    </span>
                </div>

                <p
                    className="mb-6 animate__animated animate__fadeInUp"
                    style={{ animationDelay: '0.4s' }}
                >
                    hey! i'm gabriel. thanks for clicking. i'm a web developer, and i've been doing
                    this professionally (herein defined as "companies willingly pay me to make stuff
                    on the web for them") for 10 years. i also like to type entirely in low caps in
                    order to affect a stylistically "cool" vibe. that's not important to the work i
                    do, but it is true.
                </p>

                <p
                    className="mb-6 animate__animated animate__fadeInUp"
                    style={{ animationDelay: '0.6s' }}
                >
                    "web developer" means different things to different people, so, i'd like to get
                    specific for you. specifically, i like to work with javascript. it's my home
                    base. as such, most of my experience is in building web <em>applications</em>.
                    that is to say, i have years of experience building user authentication systems,
                    2D floor plan sketching tools, multiplayer games, persistent user settings, and
                    much more besides.
                </p>

                <p
                    className="mb-6 animate__animated animate__fadeInUp"
                    style={{ animationDelay: '0.8s' }}
                >
                    the longer i do this, the less i focus on specific tools, and the more i care
                    about the <em>right</em> tools for the right job. my current favorite
                    library/framework (depending on your definition) is{' '}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        react
                    </a>
                    , but i've also built apps with{' '}
                    <a
                        href="https://emberjs.com/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        ember
                    </a>
                    ,{' '}
                    <a
                        href="https://vuejs.org/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        vue
                    </a>
                    , and{' '}
                    <a
                        href="https://backbonejs.org/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        backbone
                    </a>{' '}
                    (remember backbone? man, when did that get old? when did <em>i</em> get old?).
                    hell, i even go{' '}
                    <a
                        href="http://vanilla-js.com/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        vanilla
                    </a>{' '}
                    sometimes, just to get really crazy. i like challenges, and i like learning, so
                    whatever problems you want solved, i'm just the guy to solve them.
                </p>

                <div
                    className="animate__animated animate__fadeInUp flex flex-col gap-y-2 float-right max-w-[340px] text-center mb-2 md:mb-0 md:ml-6"
                    style={{ animationDelay: '1.0s' }}
                >
                    <img src={slightlyLessProfessionalImg} className="rounded-md" />

                    <span className="text-[12px]">
                        <em>2022, equipped with a new mane and a new mask.</em>
                    </span>
                </div>

                <p
                    className="mb-6 animate__animated animate__fadeInUp"
                    style={{ animationDelay: '1.2s' }}
                >
                    i've been working full time remote since march of 2019. i have a wonderful home
                    office in seattle, washington. being able to set up my own work space has done
                    wonders for my mental health, but, more pertinently, it's made me <em>very</em>{' '}
                    productive. my good friend{' '}
                    <a
                        href="https://unburntwitch.com/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        zoë quinn
                    </a>{' '}
                    and i created a{' '}
                    <a
                        href="https://wordleswithfriendles-staging.web.app/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        multiplayer version of Wordle
                    </a>{' '}
                    in three months, entirely in our spare time, just for fun. i've also taken
                    advantage of my established home office to expand my programming horizons into{' '}
                    <a
                        href="https://github.com/EnochSpevivo/arduino-sketchbook"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        microcontroller projects
                    </a>
                    . all this to say, i do my best with companies who encourage and foster a
                    healthy remote work culture.
                </p>

                <p
                    className="mb-6 animate__animated animate__fadeInUp"
                    style={{ animationDelay: '1.4s' }}
                >
                    that's me! if you like what i'm about, want to discuss in detail what i can do,
                    or just want to chat more about something you've seen here, please feel free to
                    <a
                        href="/contact"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        {' '}
                        reach out to me.
                    </a>
                </p>

                <p
                    className="animate__animated animate__fadeInUp mb-[35px]"
                    style={{ animationDelay: '1.6s' }}
                >
                    stay frosty, keep your towel close by, and don't forget to enjoy the sauce.
                </p>
            </div>
        </ViewWrapper>
    );
};

export default About;
