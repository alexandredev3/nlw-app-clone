import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ThemeContainer from '../hooks/ThemeContext';
import QueryProvider from '../hooks/QueryContext';
import { SubscribeProvider } from '../hooks/SubscribeContext';
import { AuthProvider } from '../hooks/AuthContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

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
