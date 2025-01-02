import React from 'react';

export enum Colors {
  Green = '#00FF00',
  DarkGreen = '#006400',
  Black = '#000000',
}

export enum Opacity {
  O100 = 'FF', // 100%
  O90 = 'E6', // 90%
  O80 = 'CC', // 80%
  O70 = 'B3', // 70%
  O60 = '99', // 60%
  O50 = '80', // 50%
  O40 = '66', // 40%
  O30 = '4D', // 30%
  O20 = '33', // 20%
  O10 = '1A', // 10%
  O0 = '00', // 0%
}

const borderRadius = '8px';
const fontSize = '25px';
const defaultPadding = '30px';
const textPadding = '10px';
const defaultMargin = '10px';
const darkGreenBorder = `2px solid ${Colors.DarkGreen}`;
const greenBorder = `2px solid ${Colors.Green}`;

export const appStyles: Record<string, React.CSSProperties> = {
  appContainer: {
    backgroundColor: Colors.Black,
    margin: '30px',
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: "'Arial', sans-serif",
    position: 'relative',
    border: darkGreenBorder,
    borderRadius: borderRadius,
    padding: defaultPadding,
  },
  heading: {
    color: Colors.Green,
    textAlign: 'center' as const,
    margin: '0',
    backgroundColor: Colors.Black,
    padding: defaultPadding,
    position: 'absolute',
    top: '0%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
  wrapper: {
    position: 'relative',
    border: darkGreenBorder,
    borderRadius: borderRadius,
    padding: '20px',
    margin: '20px',
    backgroundColor: Colors.Black,
    display: 'flex',
    justifyContent: 'center', // Center vertically
  },
  label: {
    color: Colors.DarkGreen,
    textAlign: 'center' as const,
    backgroundColor: Colors.Black,
    padding: `0 ${textPadding}`,
    position: 'absolute',
    top: '0%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
  button: {
    color: Colors.Green,
    backgroundColor: Colors.Black,
    fontSize: fontSize,
    border: greenBorder,
    borderRadius: borderRadius,
    margin: defaultMargin,
    padding: textPadding,
    textAlign: 'center' as const,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontFamily: "'Arial', sans-serif",
  },
  dropdown: {
    margin: defaultMargin,
    padding: textPadding,
    boxSizing: 'border-box' as const,
    borderRadius: borderRadius,
    border: greenBorder,
    backgroundColor: Colors.Black,
    fontSize: fontSize,
    color: Colors.Green,
    fontFamily: "'Arial', sans-serif",
    cursor: 'pointer',
  },
  dropdownOption: {},
  customDropdownMenu: {
    position: 'absolute',
    margin: `-5px ${defaultMargin}`,
    width: `calc(100% - (${defaultMargin} * 2))`, // Make the dropdown menu take the full width of the parent
    border: greenBorder,
    borderRadius: borderRadius,
    backgroundColor: Colors.Black,
    zIndex: 1,
  },
  customDropdownSearch: {
    width: `calc(100% - (${defaultMargin} * 2))`, // Make the search field take the full width of the parent
    padding: textPadding,
    boxSizing: 'border-box' as const,
    borderRadius: borderRadius,
    border: 0,
    backgroundColor: Colors.Black,
    color: Colors.Green,
    fontFamily: "'Arial', sans-serif",
  },
  customDropdownList: {
    listStyle: 'none',
    padding: '0',
    borderRadius: borderRadius,
    margin: '0',
    maxHeight: '200px',
    overflowY: 'auto',
    backgroundColor: Colors.Black,
  },
  customDropdownItem: {
    fontSize: '18px',
    padding: `calc(${textPadding} / 2)`,
    cursor: 'pointer',
    backgroundColor: Colors.Black,
    color: Colors.Green,
  },
};

export const hoverStyle = {
  backgroundColor: Colors.DarkGreen + Opacity.O30, // dark green with 30% opacity
};

export const styled = (element: React.ElementType, styles: React.CSSProperties) => {
  return React.forwardRef((props: React.HTMLAttributes<HTMLElement>, ref: React.Ref<HTMLElement>) => {
    return React.createElement(element, { ...props, ref, style: { ...styles, ...props.style } });
  });
};
