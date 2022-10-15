import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'; // @ts-ignore

interface HeaderItem {
    copy: string;
    onClick: () => void;
}

const HeaderItem = ({ copy, onClick }: HeaderItem) => {
    return (
        <div
            onClick={onClick}
            className="animate__animated animate__fadeInDown text-[14px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[18px]"
        >
            <FontAwesomeIcon icon={faAnglesRight} />
            <span className="ml-2">{copy}</span>
        </div>
    );
};

export default HeaderItem;
