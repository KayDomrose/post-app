/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import * as moment from 'moment';
import React, { useContext } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { IStoreContext, StoreContext } from '../../providers/StoreProvider';
import { ITheme } from '../../theme';
import { IWSOnlineUser } from '../../types';
import PostAirCondition from '../helpers/post/PostAirCondition';
import PostOnlineUser from '../helpers/post/PostOnlineUser';

interface IProps extends WithSheet<typeof styles> {}

const labels = {
    timestamp: 'Aktualisiert vor',
    temperature: 'Temperatur',
    humidity: 'Luftfeuchtigkeit',
    dust: 'Feinstaub',
    air_quality: 'Luftqualität',
};

const units = {
    timestamp: 'min',
    temperature: '°C',
    humidity: '%',
    dust: 'μg/m³',
    air_quality: '',
};

const values = (key, value) => {
    const x = [
        'himmlisch',
        'sehr gut',
        'gut',
        'ausreichend',
        'schlecht',
        'sehr schlecht',
        'bedenklich',
        'schädlich',
        'giftig',
        'tödlich',
        'Chemieunfall',
    ];

    const v = {
        timestamp: moment.duration(moment().diff(value * 1000, 's'), 's').minutes(),
        temperature: value.toString().replace('.', ','),
        humidity: value,
        dust: value,
        air_quality: x[value],
    };

    return v[key];
};

const HomeScreen = ({ classes }: IProps) => {
    const { onlineUsers, roomData }: IStoreContext = useContext(StoreContext);

    return (
        <div className={classes.wrapper}>
            <section>
                <h2>Gerade hier</h2>
                <ul className={classes.currentUserList}>
                    {onlineUsers.map((onlineUser: IWSOnlineUser) => (
                        <li key={onlineUser.displayString}>
                            <PostOnlineUser onlineUser={onlineUser} />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Wichtige Stats</h2>
                <div className={classes.stats}>
                    {roomData.length > 0 &&
                        Object.keys(roomData[0]).map(key => (
                            <PostAirCondition
                                key={key}
                                label={labels[key]}
                                unit={units[key]}
                                value={values(key, roomData[0][key])}
                            />
                        ))}
                </div>
            </section>
        </div>
    );
};

const styles = (theme: ITheme) => ({
    wrapper: {
        display: 'grid',
        gridGap: `${theme.spacing.outer * 2}px`,
    },
    currentUserList: {
        margin: 0,
        padding: 0,
        display: 'grid',
        gridGap: `${theme.spacing.inner}px`,

        '& li': {
            listStyle: 'none',
        },
    },
    stats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: `${theme.spacing.outer}px`,
    },
});

export default injectSheet(styles)(HomeScreen);
