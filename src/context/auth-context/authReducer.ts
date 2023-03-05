import { authState } from './';

type AuthActionType =
  | { type: '[Auth] - setLogin'; payload: authState }
  | { type: '[Auth] - setLogout'; payload: authState };
export const authReducer = (
  state: authState,
  action: AuthActionType
): authState => {
  switch (action.type) {
    case '[Auth] - setLogin':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        auth: action.payload.auth,
        user: action.payload.user
      };

    case '[Auth] - setLogout':
      localStorage.removeItem('user');
      return {
        ...state,
        auth: action.payload.auth,
        user: action.payload.user
      };
    default:
      return state;
  }
};
