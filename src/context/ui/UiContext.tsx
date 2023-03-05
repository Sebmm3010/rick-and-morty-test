/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react';

interface ContextProps {
  showModal: boolean;
  pageCollection: number[];
  pathName: string;
  //* Metodos
  setShowModal: (value: boolean) => void;
  setPath: (value: string) => void;
  setPageCollection: (value: number[]) => void;
}

export const UiContext = createContext({} as ContextProps);
