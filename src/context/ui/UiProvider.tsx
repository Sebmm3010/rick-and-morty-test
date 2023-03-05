/* eslint-disable @typescript-eslint/naming-convention */
import { FC, ReactNode, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  showModal: boolean;
  pageCollection: number[];
  pathName: string;
}
const Ui_INITIAL_STATE: UiState = {
  showModal: false,
  pageCollection: [],
  pathName: ''
};

interface Props {
  children: ReactNode;
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const setShowModal = (value: boolean) => {
    dispatch({ type: '[ui] - showModal', payload: value });
  };
  const setPath = (value: string) => {
    dispatch({ type: '[ui] - setPath', payload: value });
  };
  const setPageCollection = (value: number[]) => {
    dispatch({ type: '[ui] - setPageCollection', payload: value });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,
        setShowModal,
        setPath,
        setPageCollection
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
