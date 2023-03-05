/* eslint-disable @typescript-eslint/naming-convention */
import { FC, ReactNode, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  showModal: boolean;
}

const Ui_INITIAL_STATE: UiState = {
  showModal: false
};

interface Props {
  children: ReactNode;
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const setShowModal = (value: boolean) => {
    dispatch({ type: '[ui] - showModal', payload: value });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        setShowModal
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
