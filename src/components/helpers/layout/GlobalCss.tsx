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
            background: theme.palette.main.primary,
            color: theme.palette.main.contrast,
            fontSize: theme.typography.normal.size,
            fontWeight: theme.typography.normal.weight,
            fontFamily: theme.typography.normal.family,
        },
        'h1, h2, h3': {
            margin: 0,
            fontWeight: theme.typography.headline.weight,
            fontFamily: theme.typography.headline.family,
            marginBottom: theme.spacing.outer,
            color: theme.palette.ci.primary,
        },
    },
});

export default injectSheet(styles)(GlobalCss);
