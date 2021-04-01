import { theme, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
    mono: "'Roboto', sans-serif",
  },
  fontSizes: {
    ...theme.fontSizes,
  },
  space: {
    ...theme.space,
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  layerStyles: {
    base: {
      bg: 'black.50',
      height: '100vh',
    },
  },
  textStyles: {
    h1: {
      fontWeight: 'bold',
      color: 'grey.100',
      fontSize: 74,
    },
    h3: {
      fontWeight: 'medium',
      color: 'grey.100',
      fontSize: 28,
    },
  },
  colors: {
    white: {
      50: '#ffff',
      100: '#E1E1E6',
    },
    black: {
      50: '#121214',
      100: '#202024',
    },
    grey: {
      50: '#E1E1E6',
      100: '#A8A8B3',
      200: '#737380',
      300: '#323238',
    },
    purple: {
      50: '#8257E5',
      100: '#cebcf8',
      200: '#734BD',
      300: '#734BD1',
      400: '#6b38df',
      500: '#A32DDF',
      600: '#3f189b',
      700: '#2d116f',
      800: '#1b0944',
      900: '#0b011c',
    },
    green: {
      50: '#dcffed',
      100: '#aeffd3',
      200: '#04e168',
      300: '#4dfc9c',
      400: '#8CC84B',
      500: '#04e168',
      600: '#00af50',
      700: '#007d39',
      800: '#004c20',
      900: '#001b07',
    },
    blue: {
      50: '#2AC7E3',
    },
  },
});

export default customTheme;
