import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useContext,
} from 'react';
import api from '../services/axios';

import { firebaseClient, githubProvider } from '../services/firebase';
import useToast from './useToast';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  handleAuth: () => void;
  account: IAccount;
  isSubmitting: boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const { addToast } = useToast();
  const [account, setAccount] = useState<IAccount | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuth = useCallback(async () => {
    try {
      setIsSubmitting(true);

      const response = await firebaseClient
        .auth()
        .signInWithPopup(githubProvider);

      // eslint-disable-next-line camelcase
      const { login: username, name, avatar_url } = response.additionalUserInfo
        .profile as any;

      await api.post('/user/account', {
        username,
        name,
        avatarURL: avatar_url,
      });

      setAccount({
        username,
        name,
        avatarURL: avatar_url,
      });
      addToast({
        status: 'success',
        description: `Sua conta do github foi cadastrada com sucesso! Aproveite o evento ${name}!`,
      });
    } catch (error) {
      addToast({
        status: 'error',
        description: `Ocorreu um erro ao cadastrar sua conta com o github!`,
      });
    }
    setIsSubmitting(false);
  }, []);

  return (
    <AuthContext.Provider value={{ handleAuth, isSubmitting, account }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
