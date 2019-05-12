/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { ITheme } from '../../../theme';
import { IWSRakingUser } from '../../../types';

interface IProps extends WithSheet<typeof styles> {
    rankingUser: IWSRakingUser;
    rank: number;
}

const PostRankingUser = ({ classes, rankingUser, rank }: IProps) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.rank}>{rank}</div>
            <div className={classes.name}>{rankingUser.displayString}</div>
        </div>
    );
};

const styles = (theme: ITheme) => ({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '20px 1fr 10px 10px',
        gridGap: `${theme.spacing.mini}px`,
    },
    rank: {
        color: theme.palette.main.contrastLite,
    },
    name: {
        fontSize: theme.typography.headline.size,
    },
});

export default injectSheet(styles)(PostRankingUser);
