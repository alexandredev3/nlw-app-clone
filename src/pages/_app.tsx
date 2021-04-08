import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ThemeContainer from '../hooks/ThemeContext';
import { SubscribeProvider } from '../hooks/SubscribeContext';
import QueryProvider from '../hooks/QueryContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return (
    <ThemeContainer>
      <QueryProvider>
        <SubscribeProvider>
          <Component {...pageProps} />
        </SubscribeProvider>
      </QueryProvider>
    </ThemeContainer>
  );
}

export default MyApp;
