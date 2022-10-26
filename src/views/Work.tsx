import React, { useRef, useState } from 'react';

import useSiteStore from '../stores/UseSiteStore';
import WorkCardInfo from '../interfaces/WorkCardInfo';
import workCardInfos from '../data/WorkCards';

import WorkCard from '../components/WorkCard';
import Header from '../components/Header';
import ViewWrapper from '../components/ViewWrapper';

const Work = () => {
    const workCardGrid = useRef(null);
    const [workCardGridHeight, setWorkCardGridHeight] = useState(0);

    const handleCardClick = () => {
        // @ts-ignore
        console.log('fart');
    };

    const renderWorkCards = (workCardInfos: WorkCardInfo[]) => {
        return workCardInfos.map((workCardInfo: WorkCardInfo) => {
            return (
                <WorkCard
                    key={workCardInfo.logo}
                    logo={workCardInfo.logo}
                    title={workCardInfo.title}
                    stack={workCardInfo.stack}
                    company={workCardInfo.company}
                    blurb={workCardInfo.blurb}
                    handleCardClick={handleCardClick}
                />
            );
        });
    };

    return (
        <ViewWrapper viewName="work">
            <Header viewTitle={`work places`} subtitle={'click a card to learn more.'} />

            <div
                className="animate__animated animate__fadeInUp flex flex-wrap justify-center gap-1 pb-[35px]"
                style={workCardGridHeight ? { maxHeight: workCardGridHeight } : {}}
                ref={workCardGrid}
            >
                {renderWorkCards(workCardInfos)}
            </div>
        </ViewWrapper>
    );
};

export default Work;
