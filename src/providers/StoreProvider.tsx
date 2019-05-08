/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React, { createContext, useEffect, useState } from 'react';
import { IWebsocketResult, IWSOnlineUser } from '../types';

export interface IStoreContext {
    onlineUsers: IWSOnlineUser[];
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

    useEffect(() => {
        const websocket = new WebSocket('wss://post.alexcloud.net/ws/client');

        websocket.onmessage = (e: MessageEvent) => {
            const data: IWebsocketResult = JSON.parse(e.data);

            setOnlineUsers(data.onlineUsers);
        };
    }, []);

    return (
        <StoreContext.Provider
            value={{
                onlineUsers,
                title,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
