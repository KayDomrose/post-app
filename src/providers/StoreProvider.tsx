/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React, { createContext, useEffect, useState } from 'react';
import { IWebsocketResult, IWSOnlineUser, IWSRoomData } from '../types';

export interface IStoreContext {
    onlineUsers: IWSOnlineUser[];
    roomData: IWSRoomData[];
    title: string;
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

    useEffect(() => {
        const websocket = new WebSocket('wss://post.alexcloud.net/ws/client');

        websocket.onmessage = (e: MessageEvent) => {
            const data: IWebsocketResult = JSON.parse(e.data);

            setOnlineUsers(data.onlineUsers);
            setRoomData(data.roomData);
        };
    }, []);

    return (
        <StoreContext.Provider
            value={{
                onlineUsers,
                roomData,
                title,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
