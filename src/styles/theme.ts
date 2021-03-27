import { theme, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Roboto, system-ui, sans-serif',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    md: '8px',
  },
  colors: {
    black: {
      50: '#f2f2f3',
      100: '#d7d7d7',
      200: '#bdbdbd',
      300: '#a2a2a2',
      400: '#878789',
      500: '#6e6e70',
      600: '#565656',
      700: '#3d3d3d',
      800: '#121214',
      900: '#0c0c0d',
    },
    grey: {
      50: '#f1f1f8',
      100: '#d5d5dc',
      200: '#b9b9c3',
      300: '#9e9eaa',
      400: '#838292',
      500: '#696879',
      600: '#51515e',
      700: '#3a3a44',
      800: '#23232a',
      900: '#0c0c13',
    },
    purple: {
      50: '#f0e8ff',
      100: '#cebcf8',
      200: '#ad91ef',
      300: '#8c64e7',
      400: '#6b38df',
      500: '#5220c6',
      600: '#3f189b',
      700: '#2d116f',
      800: '#1b0944',
      900: '#0b011c',
    },
    green: {
      50: '#dcffed',
      100: '#aeffd3',
      200: '#7efeb8',
      300: '#4dfc9c',
      400: '#1efb81',
      500: '#04e168',
      600: '#00af50',
      700: '#007d39',
      800: '#004c20',
      900: '#001b07',
    },
  },
});

export default customTheme;
