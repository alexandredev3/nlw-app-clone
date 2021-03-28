import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import customTheme from '../styles/theme';
import Fonts from '../styles/Fonts';

interface Props {
  children: ReactNode;
}

export default function ThemeContainer({ children }: Props): JSX.Element {
  return (
    <ChakraThemeProvider theme={customTheme}>
      <Fonts />
      <ColorModeProvider
        options={{ initialColorMode: 'dark', useSystemColorMode: true }}
        value="dark"
      >
        <EmotionThemeProvider theme={customTheme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
}
