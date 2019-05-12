/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React, { useContext, useEffect } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { IStoreContext, StoreContext } from '../../providers/StoreProvider';
import { ITheme } from '../../theme';
import { IWSRakingUser } from '../../types';
import PostRankingUser from '../helpers/post/PostRankingUser';

interface IProps extends WithSheet<typeof styles> {}

const RankingScreen = ({ classes }: IProps) => {
    const { setAppTitle, rankingUsers }: IStoreContext = useContext(StoreContext);

    useEffect(() => {
        setAppTitle('Rangliste');
    }, []);

    return (
        <ol className={classes.list}>
            {rankingUsers.map((rankingUser: IWSRakingUser, index: number) => (
                <li key={`${rankingUser.displayString}${rankingUser.uptime}`}>
                    <PostRankingUser rankingUser={rankingUser} rank={index + 1} />
                </li>
            ))}
        </ol>
    );
};

const styles = (theme: ITheme) => ({
    list: {
        margin: 0,
        padding: 0,
        display: 'grid',
        gridGap: `${theme.spacing.inner}px`,
        '& > li': {
            listStyle: 'none',
        },
    },
});

export default injectSheet(styles)(RankingScreen);
