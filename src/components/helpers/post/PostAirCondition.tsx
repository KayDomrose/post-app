/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { ITheme } from '../../../theme';

interface IProps extends WithSheet<typeof styles> {
    label: string;
    unit: string;
    value: number;
}

const PostAirCondition = ({ classes, label, unit, value }: IProps) => (
    <div>
        <div>
            <span className={classes.value}>{value}</span>
            <span className={classes.unit}>{unit}</span>
        </div>
        <div className={classes.label}>{label}</div>
    </div>
);

const styles = (theme: ITheme) => ({
    value: {
        fontSize: theme.typography.headline.size,
        paddingRight: theme.spacing.mini,
    },
    unit: {
        color: theme.palette.main.contrastLite,
    },
    label: {
        borderTop: `2px solid ${theme.palette.ci.primary}`,
        marginTop: theme.spacing.mini,
        paddingTop: theme.spacing.mini,
    },
});

export default injectSheet(styles)(PostAirCondition);
