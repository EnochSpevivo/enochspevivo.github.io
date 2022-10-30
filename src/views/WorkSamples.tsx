import React, { useState } from 'react';
import Modal from 'react-modal';

import jasonSample from '../assets/work-samples/glo/jason-sample.png';
import programsSample from '../assets/work-samples/glo/programs-sample.png';
import verysSample1 from '../assets/work-samples/verys/sample-1.png';
import verysSample2 from '../assets/work-samples/verys/sample-2.png';
import flsSample from '../assets/work-samples/fls/fls-sample.png';
import proficiencySample from '../assets/work-samples/fls/proficiency-sample.png';
import wordForWordSample1 from '../assets/work-samples/word-for-word/sample-1.png';
import wordForWordSample2 from '../assets/work-samples/word-for-word/sample-2.png';
import wordForWordVideoSample1 from '../assets/work-samples/word-for-word/video-sample-1.mp4';
import verysVideoSample1 from '../assets/work-samples/verys/sketching.mp4';
import verysVideoSample2 from '../assets/work-samples/verys/page-swapping.mp4';

import Header from '../components/Header';
import ViewWrapper from '../components/ViewWrapper';

const WorkSamples = () => {
    const [isWordForWordModalOpen, setIsWordForWordModalOpen] = useState(false);
    const [isVerysModalOpen, setIsVerysModalOpen] = useState(false);

    return (
        <>
            <ViewWrapper viewName="workSamples">
                <Header
                    viewTitle={`work samples`}
                    subtitle={'click a square to see the live version'}
                />

                <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px] pb-[35px]">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight mb-[-15px] md:text-[24px] md:col-span-2 lg:text-[28px]">
                            glo
                        </h2>

                        {/* <a href="https://www.glo.com/strava" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={stravaSample}
                                alt="strava sample"
                            />
                        </a> */}

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
                        <a href="https://wordleswithfriendles-staging.web.app" target="_blank">
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={wordForWordSample1}
                                alt="word for word sample 1"
                            />
                        </a>

                        {/* TODO: need "setAppElement" for screen readers */}
                        <div
                            onClick={() => {
                                setIsWordForWordModalOpen(true);
                                setIsVerysModalOpen(false);
                            }}
                        >
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={wordForWordSample2}
                                alt="word for word sample 2"
                            />
                        </div>
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

                <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px] pb-[35px]">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight mb-[-15px] md:text-[24px] md:col-span-2 lg:text-[28px]">
                            verys
                        </h2>

                        <div
                            onClick={() => {
                                setIsVerysModalOpen(true);
                                setIsWordForWordModalOpen(false);
                            }}
                        >
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={verysSample1}
                                alt="verys sample 1"
                            />
                        </div>

                        <div
                            onClick={() => {
                                setIsVerysModalOpen(true);
                                setIsWordForWordModalOpen(false);
                            }}
                        >
                            <img
                                className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                                src={verysSample2}
                                alt="verys sample 2"
                            />
                        </div>
                    </div>
                </div>
            </ViewWrapper>

            <Modal
                isOpen={isWordForWordModalOpen}
                onRequestClose={() => setIsWordForWordModalOpen(false)}
                overlayClassName="flex items-center justify-center fixed inset-0 bg-white/40"
                className="max-w-[90vw] flex flex-col gap-y-4 h-auto rounded-lg bg-[#0D1321] p-[35px] text-white font-extralight h-fit md:max-w-[550px]"
            >
                {/* <h2 className="text-[32px] leading-10">"difficult to demo" projects</h2> */}

                <p className="text-[18px]">
                    word for word was a personal project i worked on with my very good friend, and
                    co-creator,{' '}
                    <a
                        href="https://unburntwitch.com/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        zoë quinn
                    </a>
                    . it's our spin on the{' '}
                    <a
                        href="https://www.nytimes.com/games/wordle/index.html"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        Wordle
                    </a>{' '}
                    craze, but with the unique addition of head-to-head, online, multiplayer.
                </p>

                <p className="text-[18px]">here are your options for viewing a demo:</p>

                <ul className="list-disc text-[18px]">
                    <li>
                        <a
                            href={`${wordForWordVideoSample1}`}
                            target="_blank"
                            className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                        >
                            view this quick video
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wordleswithfriendles-staging.web.app/"
                            target="_blank"
                            className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                        >
                            sign up for an account
                        </a>{' '}
                        and try word for word yourself. it's free!
                    </li>
                </ul>
            </Modal>

            <Modal
                isOpen={isVerysModalOpen}
                onRequestClose={() => setIsVerysModalOpen(false)}
                overlayClassName="flex items-center justify-center fixed inset-0 bg-white/40"
                className="max-w-[90vw] flex flex-col gap-y-4 h-auto rounded-lg bg-[#0D1321] p-[35px] text-white font-extralight h-fit md:max-w-[550px]"
            >
                {/* <h2 className="text-[32px] leading-10">"difficult to demo" projects</h2> */}

                <p className="text-[18px]">
                    i worked on the{' '}
                    <a
                        href="https://www.aciweb.com/aci-surestep-sketch/"
                        target="_blank"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        ACI SureStep™ Sketch
                    </a>{' '}
                    application as part of my contract with{' '}
                    <a
                        target="_blank"
                        href="https://www.verys.com/"
                        className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                    >
                        verys
                    </a>
                    . demoing it for you is unfortunately difficult, since it's locked behind a
                    hefty pay wall.
                </p>

                <p className="text-[18px]">here are three options for you:</p>

                <ul className="list-disc text-[18px]">
                    <li>
                        <a
                            href="https://www.aciweb.com/aci-surestep-sketch/"
                            target="_blank"
                            className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                        >
                            sign up
                        </a>{' '}
                        for a SureStep™ Sketch demo
                    </li>

                    <li>
                        <a
                            href={`${verysVideoSample1}`}
                            target="_blank"
                            className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                        >
                            view this screen capture of
                        </a>{' '}
                        the sketching tools i worked on
                    </li>

                    <li>
                        <a
                            href={`${verysVideoSample2}`}
                            target="_blank"
                            className="transition-all text-[#00e6e6] hover:text-[#93e5e5]"
                        >
                            view this other screen capture of
                        </a>{' '}
                        my page swapping feature
                    </li>
                </ul>
            </Modal>
        </>
    );
};

export default WorkSamples;
