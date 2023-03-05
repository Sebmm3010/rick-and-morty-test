/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react';

interface ContextProps {
  showModal: boolean;
  //* Metodos
  setShowModal: (value: boolean) => void;
}

export const UiContext = createContext({} as ContextProps);
