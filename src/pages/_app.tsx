import { AppProps } from 'next/app';

import ThemeContainer from '../hooks/ThemeContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}

export default MyApp;
