/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { Link } from 'react-router-dom';
import { ITheme } from '../../theme';

interface IProps extends WithSheet<typeof styles> {}

const routes = [
    {
        label: 'Startseite',
        to: '/',
        icon: faHome,
    },
    {
        label: 'Rangliste',
        to: '/ranking',
        icon: faStar,
    },
];

const BottomBar = ({ classes }: IProps) => (
    <nav className={classes.nav}>
        {routes.map(route => (
            <Link
                key={route.label}
                to={route.to}
                title={`Gehe zu ${route.label}`}
                className={classes.link}
            >
                <FontAwesomeIcon icon={route.icon as IconProp} />
            </Link>
        ))}
    </nav>
);

const styles = (theme: ITheme) => ({
    nav: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100vw',
        background: theme.palette.ci.primary,
        display: 'grid',
        gridTemplateColumns: `repeat(${routes.length}, 1fr)`,
        alignItems: 'center',
    },
    link: {
        color: theme.palette.ci.contrast,
        textDecoration: 'none',
        padding: `${theme.spacing.inner}px 0`,
        display: 'block',
        textAlign: 'center',
    },
});

export default injectSheet(styles)(BottomBar);
