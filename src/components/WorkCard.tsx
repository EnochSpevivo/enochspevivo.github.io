import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

interface WorkCard {
    logo: string;
    company: string;
    title: string;
    blurb: string;
    stack: string[];
    handleCardClick: () => void;
}

const WorkCard = ({ logo, company, title, stack, blurb, handleCardClick }: WorkCard) => {
    const [isSelectedWorkCard, setIsSelectedWorkCard] = useState(false);
    const renderStack = (stack: string[]) => {
        return <span>{`${stack.slice(0, -1).join(', ')}, ${stack.slice(-1)}`}</span>;
    };

    return (
        // TODO: kludgy business going on with the flex-basis due to the usage of gap in the flex parent
        <div
            className="flex flex-col basis-[100%] p-[20px] bg-white/10 cursor-pointer gap-y-2 text-[15px] transition-all rounded-md md:basis-[49.6%] lg:p-[30px] text-[16px]"
            onClick={() => {
                setIsSelectedWorkCard(true);
                handleCardClick();
            }}
            style={isSelectedWorkCard ? { flexBasis: '100%' } : {}}
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
                        <FontAwesomeIcon className="relative right-[2px]" icon={faLayerGroup} />
                        <span className="relative right-[3px]">{renderStack(stack)}</span>
                    </div>
                </div>
            </div>

            {/* <p>{blurb}</p> */}
        </div>
    );
};

export default WorkCard;
