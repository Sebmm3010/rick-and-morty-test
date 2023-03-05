/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react';
import { validUser } from '../../interfaces';
import { authState } from './';

interface ContextProps {
  auth: boolean;
  user: validUser;
  // *Metodos
  setLogin: (value: authState) => void;
  setLogout: (value: authState) => void;
}

export const AuthContext = createContext({} as ContextProps);
