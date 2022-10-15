import React from 'react';

import stravaSample from '../images/work-samples/glo/strava-sample.png';

import Header from '../components/Header';
import ViewWrapper from '../components/ViewWrapper';

const WorkSamples = () => {
    return (
        <ViewWrapper viewName="workSamples">
            <Header
                viewTitle={`what i've made`}
                subtitle={'click a square to see the live version'}
            />

            <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-y-[25px]">
                <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
                    <h2 className="col-span-1 animate__animated animate__fadeInDown text-[18px] font-extralight md:text-[24px] md:col-span-2 lg:text-[28px]">
                        glo.com
                    </h2>

                    <img
                        className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                        src={stravaSample}
                        alt=""
                    />

                    <a href="https://www.glo.com/strava" target="_blank">
                        <img
                            className="rounded-lg transition-all relative cursor-pointer bottom-[0px] hover:bottom-[3px]"
                            src={stravaSample}
                            alt="strava sample"
                        />
                    </a>
                </div>
            </div>
        </ViewWrapper>
    );
};

export default WorkSamples;
