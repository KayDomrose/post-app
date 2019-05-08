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
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridGap: `${theme.spacing.outer}px`,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        background: theme.palette.ci.primary,
    },
    title: {
        fontSize: theme.typography.headline.size,
        fontWeight: theme.typography.headline.weight,
        color: theme.palette.ci.contrast,
    },
});

export default injectSheet(styles)(Header);
