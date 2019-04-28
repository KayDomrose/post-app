/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../../../theme';
import GlobalCss from './GlobalCss';

interface IProps {
    children: any;
}

const Layout = ({ children }: IProps) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalCss />
            <main>{children}</main>
        </>
    </ThemeProvider>
);

export default Layout;
