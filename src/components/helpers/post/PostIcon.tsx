/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { ITheme } from '../../../theme';

interface IProps extends WithSheet<typeof styles> {
    icon: string;
}

const getPostIconLink = (icon: string): string =>
    `https://post.alexcloud.net/images/uploads/${icon}.png`;

const PostIcon = ({ classes, icon }: IProps) => (
    <img className={classes.icon} src={getPostIconLink(icon)} alt="" />
);

const styles = (theme: ITheme) => ({
    icon: {
        width: '100%',
        height: 'auto',
    },
});

export default injectSheet(styles)(PostIcon);
