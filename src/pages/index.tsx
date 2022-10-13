import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import type { HeadFC } from 'gatsby';
import 'animate.css';

import Landing from '../views/Landing';
import Work from '../views/Work';

const IndexPage = () => {
    const [currentView, setCurrentView] = useState('landing');

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
                <Landing currentView={currentView} setCurrentView={setCurrentView} />
            </CSSTransition>

            <CSSTransition
                classNames={{
                    enterActive: 'animate__animated animate__fadeInRight',
                    exitActive: 'animate__animated animate__fadeOutLeft',
                }}
                in={currentView === 'work'}
                addEndListener={() => {}}
            >
                <Work currentView={currentView} />
            </CSSTransition>
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
