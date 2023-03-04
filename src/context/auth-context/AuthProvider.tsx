/* eslint-disable @typescript-eslint/naming-convention */
import { FC, useReducer, ReactNode } from 'react';
import { AuthContext, authReducer } from './';

export interface authState {
  isLogin: boolean;
}

const Auth_INITIAL_STATE: authState = {
  isLogin: false
};
interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const setLogin = (value: boolean) => {
    dispatch({ type: '[Auth] - setLogin', payload: value });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
