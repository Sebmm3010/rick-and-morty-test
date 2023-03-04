/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react';

interface ContextProps {
  isLogin: boolean;
  // *Metodos
  setLogin: (value: boolean) => void;
}

export const AuthContext = createContext({} as ContextProps);
