import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Landing = ({ currentView, setCurrentView }) => {
    return (
        <div
            className={`${
                currentView === 'landing' ? '' : 'absolute'
            } min-w-[100vw] hero flex flex-col items-center justify-center h-screen font-monsterrat text-[#F0EBD8]`}
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
                    <span className="ml-2">who are you?</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '0.8s' }}
                    onClick={() => setCurrentView('work')}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">what have you worked on?</span>
                </div>

                <div
                    className="animate__animated animate__fadeInDown text-[18px] font-extralight text-[#00e6e6] cursor-pointer transition-all w-fit hover:text-[#93e5e5] md:text-[24px] lg:text-[28px]"
                    style={{ animationDelay: '1s' }}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span className="ml-2">how can i contact you?</span>
                </div>
            </div>
        </div>
    );
};

export default Landing;
