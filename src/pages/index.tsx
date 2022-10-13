import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Landing from '../views/Landing';

const IndexPage = () => {
    return (
        <>
            <Landing />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
