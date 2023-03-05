/* eslint-disable @typescript-eslint/naming-convention */
import { FC, useReducer, ReactNode } from 'react';
import { AuthContext, authReducer } from './';
import { validUser } from '../../interfaces/generalI';

export interface authState {
  auth: boolean;
  user: validUser;
}

const initState: authState = localStorage.getItem('user')
  ? { auth: true, user: JSON.parse(localStorage.getItem('user') as string) }
  : { auth: false, user: { _id: '', userName: '', email: '', password: '' } };

const Auth_INITIAL_STATE: authState = {
  auth: initState.auth,
  user: initState.user
};
interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const setLogin = (value: authState) => {
    dispatch({ type: '[Auth] - setLogin', payload: value });
  };

  const setLogout = (value: authState) => {
    dispatch({ type: '[Auth] - setLogout', payload: value });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setLogin,
        setLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
