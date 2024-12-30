import React from 'react';

export const colors = {
    green: '#00FF00',
    black: '#000000',
};

export enum Opacity {
    O100 = 'FF', // 100%
    O90 = 'E6',  // 90%
    O80 = 'CC',  // 80%
    O70 = 'B3',  // 70%
    O60 = '99',  // 60%
    O50 = '80',  // 50%
    O40 = '66',  // 40%
    O30 = '4D',  // 30%
    O20 = '33',  // 20%
    O10 = '1A',  // 10%
    O0 = '00'    // 0%
}

export const appStyles = {
    container: {
        backgroundColor: colors.black,
        height: '100%',
        width: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontFamily: "'Arial', sans-serif"
    }
};

export const createButtonStyles = (fontSize: string) => {
    const padding = `calc(${fontSize} / 5) calc(${fontSize} / 2)`;
    const width = `calc(${fontSize} * 4)`;
    const height = `calc(${fontSize} * 1.6)`;
    const borderRadius = `calc(${fontSize} / 5)`;

    return {
        color: colors.green,
        backgroundColor: colors.black,
        fontSize: fontSize,
        border: `2px solid ${colors.green}`,
        borderRadius: borderRadius,
        padding: padding,
        width: width,
        height: height,
        textAlign: 'center' as const,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontFamily: "'Arial', sans-serif",
    };
};

export const buttonStyles = {
    base: createButtonStyles('40px')
};

// We'll use a different approach for hover
export const hoverStyle = {
    backgroundColor: colors.green + Opacity.O30, // green with 30% opacity
};

export const styled = (element: React.ElementType, styles: React.CSSProperties) => {
    return React.forwardRef((props: React.HTMLAttributes<HTMLElement>, ref: React.Ref<HTMLElement>) => {
        return React.createElement(element, { ...props, ref, style: { ...styles, ...props.style } });
    });
};