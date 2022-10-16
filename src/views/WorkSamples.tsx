import React, { useState } from 'react';
import Modal from 'react-modal';

import stravaSample from '../images/work-samples/glo/strava-sample.png';
import jasonSample from '../images/work-samples/glo/jason-sample.png';
import programsSample from '../images/work-samples/glo/programs-sample.png';
import verysSample1 from '../images/work-samples/verys/sample-1.png';
import verysSample2 from '../images/work-samples/verys/sample-2.png';
// import campaignSample from '../images/work-samples/linkedin/campaign-sample.png';
// import tagTestingSample from '../images/work-samples/linkedin/tag-testing-sample.png';
import flsSample from '../images/work-samples/fls/fls-sample.png';
import proficiencySample from '../images/work-samples/fls/proficiency-sample.png';

import Header from '../components/Header';
import ViewWrapper from '../components/ViewWrapper';

const WorkSamples = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <ViewWrapper viewName="workSamples">
                <Header
                    viewTitle={`what i've made`}
                    subtitle={'click a square to see the live version'}
                />

                <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px] pb-[35px]">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight mb-[-15px] md:text-[24px] md:col-span-2 lg:text-[28px]">
                            glo
                        </h2>

                        <a href="https://www.glo.com/strava" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={stravaSample}
                                alt="strava sample"
                            />
                        </a>

                        <a href="https://www.glo.com/teachers/jason-crandell" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={jasonSample}
                                alt="jason sample"
                            />
                        </a>

                        <a href="https://www.glo.com/programs" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={programsSample}
                                alt="programs sample"
                            />
                        </a>
                    </div>
                </div>

                <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px] pb-[35px]">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight mb-[-15px] md:text-[24px] md:col-span-2 lg:text-[28px]">
                            word for word
                        </h2>

                        <a href="https://www.glo.com/strava" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={stravaSample}
                                alt="strava sample"
                            />
                        </a>

                        <a href="https://www.glo.com/teachers/jason-crandell" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={jasonSample}
                                alt="jason sample"
                            />
                        </a>
                    </div>
                </div>

                <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px] pb-[35px]">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight mb-[-15px] md:text-[24px] md:col-span-2 lg:text-[28px]">
                            fls international
                        </h2>

                        <a href="https://fls.netlify.app/" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={flsSample}
                                alt="FLS sample"
                            />
                        </a>

                        <a href="https://fls-proficiency-test.web.app/" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={proficiencySample}
                                alt="FLS proficiency test sample"
                            />
                        </a>
                    </div>
                </div>

                {/* <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px] pb-[35px]">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight mb-[-15px] md:text-[24px] md:col-span-2 lg:text-[28px]">
                            linkedin
                        </h2>

                        <div onClick={() => setIsModalOpen(true)}>
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={campaignSample}
                                alt="campaign sample"
                            />
                        </div>

                        <a href="https://www.glo.com/teachers/jason-crandell" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={tagTestingSample}
                                alt="tag testing sample"
                            />
                        </a>
                    </div>
                </div> */}

                <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px] pb-[35px]">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight mb-[-15px] md:text-[24px] md:col-span-2 lg:text-[28px]">
                            verys
                        </h2>

                        <a href="https://www.glo.com/strava" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={verysSample1}
                                alt="verys sample 1"
                            />
                        </a>

                        <a href="https://www.glo.com/teachers/jason-crandell" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={verysSample2}
                                alt="verys sample 2"
                            />
                        </a>
                    </div>
                </div>
            </ViewWrapper>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                overlayClassName="flex items-center justify-center fixed inset-0 bg-white/40"
                className="rounded-lg bg-[#0D1321] h-[90vh] w-[90vw] p-[35px] text-white font-extralight md:h-[80vh] md:w-[80vw] lg:w-[1000px]"
            >
                <h2 className="text-[32px]">note on private work</h2>

                <p>
                    some of the things i've worked on are internal tools, or behind paywalls, or
                    otherwise difficult to demo here.
                </p>
                <p>
                    in lieu of the real thing, enjoy this screen capture i've put together for you.
                </p>
            </Modal>
        </>
    );
};

export default WorkSamples;
