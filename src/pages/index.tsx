import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import type { HeadFC } from 'gatsby';
import 'animate.css';

import useSiteStore from '../stores/UseSiteStore';
import Landing from '../views/Landing';
import Work from '../views/Work';
import WorkSamples from '../views/WorkSamples';

const IndexPage = () => {
    // TODO: type unknown?
    // @ts-ignore
    const currentView = useSiteStore((state) => state.currentView);

    return (
        <>
            {/* https://blog.shahednasser.com/how-to-animate-components-entrance-and-exit-in-react/#using-csstransition */}
            <CSSTransition
                classNames={{
                    exitActive: 'animate__animated animate__fadeOutLeft',
                }}
                in={currentView === 'landing'}
                addEndListener={() => {}}
            >
                <Landing />
            </CSSTransition>

            <CSSTransition
                classNames={{
                    enterActive: 'animate__animated animate__fadeInRight',
                    exitActive: 'animate__animated animate__fadeOutLeft',
                }}
                in={currentView === 'work'}
                addEndListener={() => {}}
            >
                <Work />
            </CSSTransition>

            <CSSTransition
                classNames={{
                    enterActive: 'animate__animated animate__fadeInRight',
                    exitActive: 'animate__animated animate__fadeOutLeft',
                }}
                in={currentView === 'work'}
                addEndListener={() => {}}
            >
                <WorkSamples />
            </CSSTransition>
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
