import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import WorkCardInfo from '../interfaces/WorkCardInfo';
import workCardInfos from '../data/WorkCards';

import WorkCard from '../components/WorkCard';

const Work = ({ currentView }) => {
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
                />
            );
        });
    };

    return (
        <div
            className={`${
                currentView === 'work' ? '' : 'hidden'
            } hero flex flex-col items-center justify-center h-screen font-monsterrat text-[#F0EBD8] overflow-y-scroll`}
        >
            <div className="h-screen w-screen gap-y-0 w-[90%] xl:w-3/4">
                <div className="flex flex-col justify-between items-baseline py-[15px] sm:flex-row">
                    <div className="flex flex-col">
                        <h2 className="animate__animated animate__fadeInDown text-[24px] md:text-[28px] lg:text-[32px]">
                            what i've worked on
                        </h2>

                        <h3 className="relative bottom-[6px] animate__animated animate__fadeInDown text-[12px] font-extralight sm:bottom-[5px] md:text-[16px] lg:text-[22px]">
                            click a card to see work samples.
                        </h3>
                    </div>

                    <div className="flex flex-col gap-x-2 sm:flex-row">
                        <div className="animate__animated animate__fadeInDown text-[14px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[22px] lg:text-[24px]">
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <span className="ml-2">who are you?</span>
                        </div>

                        <div className="animate__animated animate__fadeInDown text-[14px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[22px] lg:text-[24px]">
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <span className="ml-2">how can i contact you?</span>
                        </div>
                    </div>
                </div>

                <div className="animate__animated animate__fadeInUp flex flex-wrap justify-center gap-1 pb-[35px]">
                    {renderWorkCards(workCardInfos)}
                </div>
            </div>
        </div>
    );
};

export default Work;
