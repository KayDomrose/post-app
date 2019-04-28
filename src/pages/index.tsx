/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import Helmet from 'react-helmet';
import Headline from '../components/helpers/layout/Headline';
import Layout from '../components/helpers/layout/Layout';

const IndexPage = () => (
    <>
        <Helmet>
            {/* Read values from .env */}
            <title>{process.env.GATSBY_EXAMPLE_CONFIG}</title>
        </Helmet>
        <Layout>
            <Headline>Hello World</Headline>
        </Layout>
    </>
);

export default IndexPage;
