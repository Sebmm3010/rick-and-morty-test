import { authState } from './';

type AuthActionType = { type: '[Auth] - setLogin'; payload: boolean };

export const authReducer = (
  state: authState,
  action: AuthActionType
): authState => {
  switch (action.type) {
    case '[Auth] - setLogin':
      return {
        ...state,
        isLogin: action.payload
      };

    default:
      return state;
  }
};
