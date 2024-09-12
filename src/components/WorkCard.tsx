import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faLayerGroup, faCalendar } from '@fortawesome/free-solid-svg-icons';

import ModalWrapper from './ModalWrapper';

interface WorkCard {
    logo: string;
    company: string;
    title: string;
    duration: string;
    stack: string[];
    details: string[];
}

const WorkCard = ({ logo, company, title, stack, duration, details }: WorkCard) => {
    const [isWorkCardModalOpen, setIsWorkCardModalOpen] = useState(false);
    const renderStack = (stack: string[]) => {
        if (stack.length === 1) {
            return <span>{stack[0]}</span>;
        }
        
        return <span>{`${stack.slice(0, -1).join(', ')}, ${stack.slice(-1)}`}</span>;
    };
    const renderWorkDetails = (details: string[]) => {
        return details.map((detail: string) => {
            return <li className="mb-2">{detail}</li>;
        });
    };

    return (
        // TODO: kludgy business going on with the flex-basis due to the usage of gap in the flex parent
        <>
            <div
                className="flex flex-col basis-[100%] p-[20px] bg-white/10 cursor-pointer gap-y-2 text-[15px] transition-all rounded-md hover:bg-white/30 md:basis-[49.6%] lg:p-[30px] text-[16px]"
                onClick={() => {
                    console.log('shart');
                    setIsWorkCardModalOpen(true);
                }}
            >
                <div className="flex justify-left items-start gap-x-4">
                    <img className="w-[45px] md:min-w-[45px] lg:min-w-[60px]" src={logo} />

                    <div className="flex flex-col gap-y-1">
                        <div className="flex items-baseline gap-x-2">
                            <FontAwesomeIcon className="relative left-[1px]" icon={faBuilding} />
                            <span className="relative left-[2px]">{company}</span>
                        </div>

                        <div className="flex items-baseline gap-x-2">
                            <FontAwesomeIcon icon={faUser} />
                            <span className="relative">{title}</span>
                        </div>

                        <div className="flex items-baseline gap-x-2">
                            <FontAwesomeIcon icon={faCalendar} />
                            <span className="relative">{duration}</span>
                        </div>

                        <div className="flex items-baseline gap-x-2">
                            <FontAwesomeIcon className="relative right-[2px]" icon={faLayerGroup} />
                            <span className="relative right-[3px]">{renderStack(stack)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalWrapper
                isOpen={isWorkCardModalOpen}
                onRequestClose={() => {
                    console.log('fuck');
                    setIsWorkCardModalOpen(false);
                }}
            >
                <ul className="list-disc">{renderWorkDetails(details)}</ul>
            </ModalWrapper>
        </>
    );
};

export default WorkCard;
