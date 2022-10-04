import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
    return <h1 className="text-3xl font-bold underline font-montserrat">Hello world!</h1>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
