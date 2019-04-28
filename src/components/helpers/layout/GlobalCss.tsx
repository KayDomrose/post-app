/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import { ITheme } from '../../../theme';

const GlobalCss = () => (
    <Helmet>
        <html lang="de" />
    </Helmet>
);

const styles = (theme: ITheme) => ({
    '@global': {
        '*': {
            boxSizing: 'border-box' as 'border-box',
        },
        body: {
            margin: 0,
        },
    },
});

export default injectSheet(styles)(GlobalCss);
