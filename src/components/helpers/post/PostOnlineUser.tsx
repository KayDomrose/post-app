/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import * as moment from 'moment';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { ITheme } from '../../../theme';
import { IWSOnlineUser } from '../../../types';
import PostIcon from './PostIcon';
import PostRank from './PostRank';

interface IProps extends WithSheet<typeof styles> {
    onlineUser: IWSOnlineUser;
}

const formatDuration = (duration, formatString) => {
    let length;
    let format;
    if (formatString === 'long') {
        format = [
            duration.months() === 1 ? 'Month' : 'Months',
            duration.days() === 1 ? 'Day' : 'Days',
            duration.hours() === 1 ? 'Hour' : 'Hours',
            duration.minutes() === 1 ? 'Minute' : 'Minutes',
            duration.seconds() === 1 ? 'Second' : 'Seconds',
        ];
        length = duration.format(
            'M [' +
                format[0] +
                '] d [' +
                format[1] +
                '] h [' +
                format[2] +
                '] m [' +
                format[3] +
                ' and] s [' +
                format[4] +
                ']'
        );
    } else if (formatString === 'short') {
        length = duration.format('M[m] d[d] h:mm:ss');
    } else {
        length = duration.format(formatString);
    }
    return length;
};

const PostOnlineUser = ({ classes, onlineUser }: IProps) => {
    const secondsDiff = moment().diff(onlineUser.first_seen * 1000, 's');
    const diff = moment.duration(secondsDiff, 's');

    return (
        <div className={classes.wrapper}>
            <PostRank rank={onlineUser.rank} />
            <PostIcon icon={onlineUser.icon} />
            <span className={classes.name}>{onlineUser.displayString}</span>
            <div className={classes.time}>
                <span className="v">{diff.hours()}</span>
                <span className="l">h</span>
                <span className="v">{diff.minutes()}</span>
                <span className="l">min</span>
            </div>
        </div>
    );
};

const styles = (theme: ITheme) => ({
    wrapper: {
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '30px 30px 1fr 100px',
        gridGap: `${theme.spacing.inner}px`,
    },
    name: {
        fontSize: theme.typography.headline.size,
    },
    time: {
        textAlign: 'right',
        '& .l': {
            color: theme.palette.main.contrastLite,
            '&:not(:last-child)': {
                paddingRight: theme.spacing.mini,
            },
        },
        '& .v': {
            fontSize: theme.typography.headline.size,
        },
    },
});

export default injectSheet(styles)(PostOnlineUser);
