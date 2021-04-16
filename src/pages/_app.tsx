import { AppProps } from 'next/app';

import ThemeContainer from '../hooks/ThemeContext';
import QueryProvider from '../hooks/QueryContext';
import { SubscribeProvider } from '../hooks/SubscribeContext';
import { AuthProvider } from '../hooks/AuthContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeContainer>
      <QueryProvider>
        <AuthProvider>
          <SubscribeProvider>
            <Component {...pageProps} />
          </SubscribeProvider>
        </AuthProvider>
      </QueryProvider>
    </ThemeContainer>
  );
}

export default MyApp;
