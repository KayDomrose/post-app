/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { ITheme } from '../../../theme';

interface IProps extends WithSheet<typeof styles> {
    rank: number;
}

const getPostRankLink = (icon: number): string =>
    `https://post.alexcloud.net/images/${icon.toString()}.png`;

const PostRank = ({ classes, rank }: IProps) => (
    <img className={classes.icon} src={getPostRankLink(rank)} alt="" />
);

const styles = (theme: ITheme) => ({
    icon: {
        width: '100%',
        height: 'auto',
    },
});

export default injectSheet(styles)(PostRank);
