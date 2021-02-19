import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/Api';
import { AuthState, SignInCredentials } from '../services/models/IAuthenticate';
import { IUser } from '../services/models/IUser';

interface AuthContextData {
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Menew:token');
    const user = localStorage.getItem('@Menew:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@Menew:token');
    localStorage.removeItem('@Menew:user');

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ username, password, rememberMe }) => {
    const responseToken = await api.post('authenticate', {
      username,
      password,
      rememberMe,
    });

    const token = responseToken.data.id_token;
    localStorage.setItem('@Menew:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    const responseUser = await api.get('account');

    const user = responseUser.data;
    localStorage.setItem('@Menew:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem('@Menew:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
