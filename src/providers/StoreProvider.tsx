/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React, { createContext, useEffect, useState } from 'react';
import { IWebsocketResult, IWSOnlineUser, IWSRakingUser, IWSRoomData } from '../types';

export interface IStoreContext {
    onlineUsers: IWSOnlineUser[];
    roomData: IWSRoomData[];
    title: string;
    rankingUsers: IWSRakingUser[];
    setAppTitle: { (title: string): void };
}

interface IProps {
    children: any;
}

const StoreContext = createContext({} as IStoreContext);

export { StoreContext };

const StoreProvider = ({ children }: IProps) => {
    const [title, setTitle] = useState('Post');
    const [onlineUsers, setOnlineUsers] = useState([] as IWSOnlineUser[]);
    const [roomData, setRoomData] = useState([] as IWSRoomData[]);
    const [rankingUsers, setRankingUsers] = useState([] as IWSRakingUser[]);

    useEffect(() => {
        const websocket = new WebSocket('wss://post.alexcloud.net/ws/client');

        websocket.onmessage = (e: MessageEvent) => {
            const data: IWebsocketResult = JSON.parse(e.data);

            setOnlineUsers(data.onlineUsers);
            setRoomData(data.roomData);
            setRankingUsers(data.positionTableData);
        };
    }, []);

    const setAppTitle = (appTitle: string): void => {
        setTitle(appTitle);
        window.document.title = appTitle;
    };

    return (
        <StoreContext.Provider
            value={{
                onlineUsers,
                roomData,
                title,
                rankingUsers,
                setAppTitle,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
