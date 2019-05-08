/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

const palette = {
    main: {
        primary: '#fff',
        contrast: 'rgba(0, 0, 0, 0.9)',
        contrastLite: 'rgba(0, 0, 0, 0.5)',
    },
    second: {},
    ci: {
        primary: 'orange',
        contrast: '#fff',
    },
    ciSecond: {},
};

const theme = {
    typography: {
        normal: {
            size: 18,
            weight: 300,
            family: '"Abel", sans-serif',
        },
        headline: {
            size: 26,
            weight: 700,
            family: '"Abel", sans-serif',
        },
    },
    spacing: {
        inner: 15,
        outer: 30,
    },
    palette,
    border: {},
    transition: (target: string) => `${target} 0.3s ease-in-out`,
    breakpoints: {
        wide: 1300,
        tablet: 992,
        mobile: 576,
    },
    shadows: {
        first: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
    modules: {
        header: {
            height: 30,
        },
        bottomBar: {
            height: 50,
        },
    },
};

export type ITheme = typeof theme;

export default theme;
