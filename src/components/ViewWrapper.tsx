import React from 'react';

import useSiteStore from '../stores/UseSiteStore';

interface ViewWrapper {
    viewName: string;
}

const ViewWrapper = ({ viewName, children }) => {
    // @ts-ignore
    const currentView = useSiteStore((state) => state.currentView);

    console.log({ currentView });
    return (
        <div className="font-montserrat hero flex flex-col items-center justify-center h-screen font-monsterrat text-[#F0EBD8] overflow-y-scroll">
            <div className="h-screen w-screen gap-y-0 w-[90%] xl:w-2/4">{children}</div>
        </div>
    );
};

export default ViewWrapper;
