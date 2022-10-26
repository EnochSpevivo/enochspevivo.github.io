import React, { useState } from 'react';

import Header from '../components/Header';
import ViewWrapper from '../components/ViewWrapper';

const Contact = () => {
    return (
        <ViewWrapper viewName="work">
            <Header viewTitle={'contact'} subtitle={`reach out some time, won't you?`} />

            <p></p>
        </ViewWrapper>
    );
};

export default Contact;
