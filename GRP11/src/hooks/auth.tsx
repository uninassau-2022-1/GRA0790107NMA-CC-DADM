import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  user: User;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}

interface User {
  id: string;
  first_name: string;
  email: string;
  photo?: string;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  const userStorageKey = '@thapafit:user';

  useEffect(() => {
    async function loadStorageData() {
      const userStoraged = await AsyncStorage.getItem(userStorageKey);

      if (userStoraged) {
        const userLogged = JSON.parse(userStoraged) as User;

        setUser(userLogged);
      }

      setUserStorageLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@thapfit:token', token],
        ['@thapfit:user', JSON.stringify(user)],
      ]);

      setUser(user);
    } catch (err) {
      Alert.alert('Falha na autenticação.', 'Verifique seus dados.');
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        userStorageLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
