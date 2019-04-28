/*!
 * Copyright 2019
 * Kay Domrose <kay.domrose@gmail.com>
 */

const palette = {
    main: {
        background: '#fff',
        text: 'rgba(0, 0, 0, 0.9)',
    },
    second: {},
    ci: {},
    ciSecond: {},
};

const theme = {
    typography: {
        normal: {
            size: 20,
            weight: 300,
            table: 16,
        },
        headline: {
            size: 50,
            weight: 700,
            tablet: 24,
        },
    },
    spacing: {
        inner: 15,
        outer: 60,
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
    modules: {},
};

export type ITheme = typeof theme;

export default theme;
