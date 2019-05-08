/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

export interface IWebsocketResult {
    onlineUsers: IWSOnlineUser[];
}

export interface IWSOnlineUser {
    displayString: string;
    first_seen: number;
    icon: string;
    rank: number;
}
