/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalCss from '../components/helpers/layout/GlobalCss';
import Main from '../components/helpers/layout/Main';
import BottomBar from '../components/modules/BottomBar';
import Header from '../components/modules/Header';
import HomeScreen from '../components/screens/HomeScreen';
import StoreProvider from '../providers/StoreProvider';
import theme from '../theme';

const IndexPage = () => {
    const [start, setStart] = useState(false);

    useEffect(() => {
        setStart(true);
    }, []);

    if (!start) {
        return <div />;
    }

    return (
        <ThemeProvider theme={theme}>
            <StoreProvider>
                <BrowserRouter>
                    <>
                        <GlobalCss />
                        <Header />
                        <Main>
                            <Switch>
                                <Route exact={true} path="/" component={HomeScreen} />
                            </Switch>
                        </Main>
                        <BottomBar />
                    </>
                </BrowserRouter>
            </StoreProvider>
        </ThemeProvider>
    );
};

export default IndexPage;
