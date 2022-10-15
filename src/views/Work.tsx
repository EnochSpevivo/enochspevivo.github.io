import React, { useRef, useState } from 'react';

import useSiteStore from '../stores/UseSiteStore';
import WorkCardInfo from '../interfaces/WorkCardInfo';
import workCardInfos from '../data/WorkCards';

import WorkCard from '../components/WorkCard';
import Header from '../components/Header';
import ViewWrapper from '../components/ViewWrapper';

const Work = () => {
    // @ts-ignore
    const currentView = useSiteStore((state) => state.currentView);
    const workCardGrid = useRef(null);
    const [workCardGridHeight, setWorkCardGridHeight] = useState(0);

    const handleCardClick = () => {
        // @ts-ignore
        setWorkCardGridHeight(workCardGrid.current.offsetHeight);
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
            <Header
                viewTitle={`where i've worked`}
                subtitle={'click a card to see work samples.'}
            />

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
