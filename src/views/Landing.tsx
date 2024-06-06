import * as React from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // @ts-ignore

import useSiteStore from '../stores/UseSiteStore';

const Landing = () => {
    // @ts-ignore
    const currentView = useSiteStore((state) => state.currentView); // @ts-ignore

    return (
        <div
            className={`${
                currentView === 'landing' ? '' : 'absolute'
            } min-w-[100vw] hero flex flex-col items-center justify-center h-screen font-montserrat text-[#F0EBD8]`}
        >
            <div className="flex flex-col w-3/4 lg:w-2/3">
                <h1 className="animate__animated animate__fadeInDown text-[38px] font-light md:text-[52px] lg:text-[98px] xl:text-[120px]">
                    hi! i'm gabriel.
                </h1>

                <h2
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight mb-[8px] md:text-[24px] md:mb-[0px] lg:text-[28px]"
                    style={{ animationDelay: '0.2s' }}
                >
                    10 year veteran of web development.
                    
                </h2>

                <h2
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight mb-[8px] md:text-[24px] md:mb-[0px] lg:text-[28px]"
                    style={{ animationDelay: '0.2s' }}
                >
                    front end, back end, web apps, APIs, and beyond.
                </h2>

                <h2
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight mb-4 md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.4s' }}
                >
                    formerly a senior customer success engineer with{' '}
                    <a
                        className="text-[#00e6e6] text-[#00e6e6] transition-all hover:text-[#93e5e5]"
                        href="https://www.netlify.com/"
                        target="_blank"
                    >
                        netlify.
                    </a>
                </h2>

                <h3 className="animate__animated animate__fadeInDown text-[18px] font-extralight mb-4 md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.6s' }}>
                    recently laid off. currently on the job hunt. 
                    <a
                        className="cursor-pointer text-[#00e6e6] text-[#00e6e6] transition-all hover:text-[#93e5e5]"
                        onClick={() => navigate('/contact')}
                    > reach out!
                    </a>
                </h3>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.8s' }}
                    onClick={() => navigate('/about')}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">about</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1s' }}
                    onClick={() => navigate('/work')}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">work places</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1.2s' }}
                    onClick={() => navigate('/samples')}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">work samples</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1.4s' }}
                    onClick={() => navigate('/contact')}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">contact</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown flex gap-x-4 text-[18px] cursor-pointer transition-all w-fit mt-4 md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1.6s' }}
                >
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
        </div>
    );
};

export default Landing;
