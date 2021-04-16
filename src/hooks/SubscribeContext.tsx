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
import useToast from './useToast';

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
  const { addToast } = useToast();

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
      const sessionToken = sessionStorage.getItem('session-token');

      if (sessionToken) {
        return push('/track');
      }

      const response = await api.post('/user/subscribe', { name, email });
      const { token } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;
      sessionStorage.setItem('session-token', String(token));
      push('/track');

      addToast({
        status: 'success',
        description: 'Sua inscrição foi realizada com sucesso!',
      });
      return setUserData(token);
    } catch (error) {
      return addToast({
        status: 'error',
        description: 'Ocorreu um erro ao concluir sua inscrição!',
      });
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
