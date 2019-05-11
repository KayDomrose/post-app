/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React, { useContext } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { IStoreContext, StoreContext } from '../../providers/StoreProvider';
import { ITheme } from '../../theme';

interface IProps extends WithSheet<typeof styles> {}

const Header = ({ classes }: IProps) => {
    const { title }: IStoreContext = useContext(StoreContext);

    return (
        <header className={classes.header}>
            <h1 className={classes.title}>{title}</h1>
        </header>
    );
};

const styles = (theme: ITheme) => ({
    header: {
        paddingLeft: theme.spacing.outer,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        background: theme.palette.ci.primary,
        height: theme.modules.header.height,
        display: 'grid',
        alignItems: 'center',
    },
    title: {
        fontSize: theme.typography.headline.size,
        fontWeight: theme.typography.headline.weight,
        color: theme.palette.ci.contrast,
        margin: 0,
    },
});

export default injectSheet(styles)(Header);
