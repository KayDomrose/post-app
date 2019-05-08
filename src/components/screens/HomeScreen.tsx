/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React, { useContext } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { IStoreContext, StoreContext } from '../../providers/StoreProvider';
import { ITheme } from '../../theme';
import { IWSOnlineUser } from '../../types';
import PostOnlineUser from '../helpers/post/PostOnlineUser';

interface IProps extends WithSheet<typeof styles> {}

const HomeScreen = ({ classes }: IProps) => {
    const { onlineUsers }: IStoreContext = useContext(StoreContext);

    return (
        <>
            <h2>Gerade da</h2>
            <ul className={classes.currentUserList}>
                {onlineUsers.map((onlineUser: IWSOnlineUser) => (
                    <li key={onlineUser.displayString}>
                        <PostOnlineUser onlineUser={onlineUser} />
                    </li>
                ))}
            </ul>
        </>
    );
};

const styles = (theme: ITheme) => ({
    currentUserList: {
        margin: 0,
        padding: 0,
        display: 'grid',
        gridGap: `${theme.spacing.inner}px`,

        '& li': {
            listStyle: 'none',
        },
    },
});

export default injectSheet(styles)(HomeScreen);
