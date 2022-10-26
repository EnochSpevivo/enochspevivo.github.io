import * as React from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // @ts-ignore

import useSiteStore from '../stores/UseSiteStore';

const Landing = () => {
    // @ts-ignore
    const currentView = useSiteStore((state) => state.currentView); // @ts-ignore
    const setCurrentView = useSiteStore((state) => state.setCurrentView);

    return (
        <div
            className={`${
                currentView === 'landing' ? '' : 'absolute'
            } min-w-[100vw] hero flex flex-col items-center justify-center h-screen font-montserrat text-[#F0EBD8]`}
        >
            <div className="flex flex-col w-3/4 lg:w-2/3">
                <h1 className="animate__animated animate__fadeInDown text-[38px] font-light md:text-[52px] lg:text-[120px]">
                    hi! i'm gabriel.
                </h1>

                <h2
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.2s' }}
                >
                    i'm a web developer based in seattle.
                </h2>

                <h2
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight mb-4 md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.4s' }}
                >
                    folks have been paying me to develop web applications for 8 years now.
                </h2>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.6s' }}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">about</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.8s' }}
                    onClick={() => navigate('/work')}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">work places</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1.0s' }}
                    onClick={() => navigate('/samples')}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">work samples</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1.2s' }}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">contact</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown flex gap-x-4 text-[18px] cursor-pointer transition-all w-fit mt-4 md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1.4s' }}
                >
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
        </div>
    );
};

export default Landing;
