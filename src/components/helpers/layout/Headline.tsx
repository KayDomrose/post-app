/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { ITheme } from '../../../theme';

interface IProps extends WithSheet<typeof styles> {
    children: any;
}

const styles = (theme: ITheme) => ({
    title: {
        fontSize: theme.typography.headline.size,
        [`@media (max-width: ${theme.breakpoints.tablet}px)`]: {
            fontSize: theme.typography.headline.size,
        },
    },
});

const Headline = ({ classes, children }: IProps) => <h1 className={classes.title}>{children}</h1>;

export default injectSheet(styles)(Headline);
