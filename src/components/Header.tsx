import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // @ts-ignore

import useSiteStore from '../stores/UseSiteStore';

import HeaderItem from './HeaderItem';

interface Header {
    viewTitle: string;
    subtitle: string;
}

const Header = ({ viewTitle, subtitle }: Header) => {
    const setCurrentView = useSiteStore((state) => state.setCurrentView);

    return (
        <div className="font-montserrat flex flex-col justify-between items-baseline pt-[15px]">
            <div className="flex w-full justify-between">
                <div className="flex flex-col gap-x-2 sm:flex-row">
                    <HeaderItem copy="who are you?" onClick={() => {}} />

                    <HeaderItem copy="work samples" onClick={() => setCurrentView('workSamples')} />

                    <HeaderItem
                        copy="where have you worked?"
                        onClick={() => setCurrentView('work')}
                    />

                    <HeaderItem copy="contact" onClick={() => {}} />
                </div>

                <div className="flex gap-x-4 relative top-[4px] sm:justify-end">
                    <a href="https://github.com/EnochSpevivo" target="_blank">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="text-[24px] transition-all cursor-pointer hover:text-[#00e6e6] md:text-[28px]"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gabriel-gonzalvez-927b51ab/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="text-[24px] transition-all cursor-pointer hover:text-[#00e6e6] md:text-[28px]"
                        />
                    </a>
                </div>
            </div>

            <div>
                <h2 className="animate__animated animate__fadeInDown text-[24px] md:text-[28px] lg:text-[32px]">
                    {viewTitle}
                </h2>

                <h3 className="relative bottom-[6px] animate__animated animate__fadeInDown text-[12px] font-extralight sm:bottom-[0px] md:text-[16px] lg:text-[22px]">
                    {subtitle}
                </h3>
            </div>
        </div>
    );
};

export default Header;
