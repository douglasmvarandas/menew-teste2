import { IUser } from './IUser';

export interface AuthState {
  token: string;
  user: IUser;
}

export interface SignInCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}
