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

const Main = ({ classes, children }: IProps) => <main className={classes.main}>{children}</main>;

const styles = (theme: ITheme) => ({
    main: {
        padding: theme.spacing.outer,
        marginTop: theme.modules.header.height,
        marginBottom: theme.modules.bottomBar.height,
    },
});

export default injectSheet(styles)(Main);
