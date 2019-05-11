/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

export interface IWebsocketResult {
    onlineUsers: IWSOnlineUser[];
    roomData: IWSRoomData[];
}

export interface IWSOnlineUser {
    displayString: string;
    first_seen: number;
    icon: string;
    rank: number;
}

export interface IWSRoomData {
    air_quality: number;
    dust: number;
    humidity: number;
    temperature: number;
    timestamp: number;
}
