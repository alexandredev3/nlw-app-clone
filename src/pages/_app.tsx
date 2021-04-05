import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import ThemeContainer from '../hooks/ThemeContext';
import { SubscribeProvider } from '../hooks/SubscribeContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return (
    <ThemeContainer>
      <SubscribeProvider>
        <Component {...pageProps} />
      </SubscribeProvider>
    </ThemeContainer>
  );
}

export default MyApp;
