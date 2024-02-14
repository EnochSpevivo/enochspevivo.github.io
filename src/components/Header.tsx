import * as React from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // @ts-ignore
import { faHome } from '@fortawesome/free-solid-svg-icons'; // @ts-ignore

import HeaderItem from './HeaderItem';

interface Header {
    viewTitle: string;
    subtitle: string;
}

const Header = ({ viewTitle, subtitle }: Header) => {
    return (
        <div className="font-montserrat flex flex-col justify-between items-baseline pt-[15px] md:mb-4">
            <div className="flex w-full justify-between">
                <div className="flex flex-col gap-x-2 sm:flex-row">
                    <HeaderItem icon={faHome} onClick={() => navigate('/')} />

                    <HeaderItem copy="about" onClick={() => navigate('/about')} />

                    <HeaderItem copy="work places" onClick={() => navigate('/work')} />

                    <HeaderItem copy="work samples" onClick={() => navigate('/samples')} />

                    <HeaderItem copy="contact" onClick={() => navigate('/contact')} />
                </div>

                <div className="flex gap-x-4 relative top-[4px] sm:justify-end">
                    <a href="https://github.com/EnochSpevivo" target="_blank">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="text-[24px] transition-all cursor-pointer hover:text-[#00e6e6] md:text-[28px]"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gabriel-g-927b51ab/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="text-[24px] transition-all cursor-pointer hover:text-[#00e6e6] md:text-[28px]"
                        />
                    </a>

                    <a
                        href="https://docs.google.com/document/d/1QgF8Tde5vug-2m2TDLm1pg46tf67wz8GKH5LfvF9HaY/edit?usp=sharing"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faFileLines}
                            className="text-[24px] transition-all cursor-pointer hover:text-[#00e6e6] md:text-[28px]"
                        />
                    </a>
                </div>
            </div>

            <div>
                <h2 className="animate__animated animate__fadeInDown text-[24px] md:text-[28px] lg:text-[32px]">
                    {viewTitle}
                </h2>

                <h3 className="relative bottom-[8px] animate__animated animate__fadeInDown text-[12px] font-extralight md:text-[16px] lg:text-[18px]">
                    {subtitle}
                </h3>
            </div>
        </div>
    );
};

export default Header;
