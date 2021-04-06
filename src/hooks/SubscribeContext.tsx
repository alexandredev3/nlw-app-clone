import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';

import api from '../services/axios';

interface ISubscribeProviderProps {
  children: ReactNode;
}

interface IUserData {
  token: string;
}

interface ISubscribeContextData {
  subscribe: (name: string, email: string) => Promise<void | Element>;
  userData: IUserData;
}

const SubscribeContext = createContext<ISubscribeContextData>(
  {} as ISubscribeContextData
);

export function SubscribeProvider({
  children,
}: ISubscribeProviderProps): JSX.Element {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('session-token');

    if (sessionToken) {
      api.defaults.headers.Authorization = `Bearer ${sessionToken}`;

      setUserData(sessionToken);
    }
  }, []);

  async function subscribe(
    name: string,
    email: string
  ): Promise<void | Element> {
    try {
      const response = await api.post('/subscribe', { name, email });
      const { token } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;
      sessionStorage.setItem('session-token', String(token));
      push('/track');

      return setUserData(token);
    } catch (error) {
      return (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>
            Ocorreu um error inesperado, tente mais tarde.
          </AlertTitle>
          <CloseButton />
        </Alert>
      );
    }
  }

  return (
    <SubscribeContext.Provider value={{ subscribe, userData }}>
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe(): ISubscribeContextData {
  const context = useContext(SubscribeContext);

  if (!context) {
    throw new Error('useSubscribe must be used within a SubscribeProvider');
  }

  return context;
}
