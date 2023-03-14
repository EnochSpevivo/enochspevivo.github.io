import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'; // @ts-ignore

interface HeaderItem {
    icon?: any;
    copy?: string;
    onClick: () => void;
}

const HeaderItem = ({ icon, copy, onClick }: HeaderItem) => {
    const renderCopyOrIcon = () => {
        if (copy) {
            return (
                <>
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-1">{copy}</span>
                </>
            );
        } else if (icon) {
            return <FontAwesomeIcon icon={icon} className="text-[18px] md:text-[28px]" />;
        }
    };

    return (
        <div
            onClick={onClick}
            className="animate__animated animate__fadeInDown text-[14px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[18px]"
        >
            {renderCopyOrIcon()}
        </div>
    );
};

export default HeaderItem;
