import React from 'react';

import useSiteStore from '../stores/UseSiteStore';

interface ViewWrapper {
    viewName: string;
    children: any;
}

const ViewWrapper = ({ viewName, children }: ViewWrapper) => {
    // @ts-ignore
    const currentView = useSiteStore((state) => state.currentView);

    return (
        <div className="font-montserrat hero flex flex-col items-center justify-center h-screen font-monsterrat text-[#F0EBD8] overflow-y-scroll">
            <div className="h-screen w-[90%] gap-y-0 xl:w-3/5">{children}</div>
        </div>
    );
};

export default ViewWrapper;
