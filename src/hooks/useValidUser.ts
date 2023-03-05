/* eslint-disable array-callback-return */
import { useContext } from 'react';
import { IForm } from '../auth/pages/LoginPage';
import { users } from '../data/users.json';
import { AuthContext } from '../context/auth-context/AuthContext';
export const useValidUser = () => {
  const { setLogin } = useContext(AuthContext);

  const handleValidUser = ({ email, password }: IForm) => {
    for (const user of users) {
      if (user.email === email && user.password === password) {
        setLogin({ auth: true, user });
      }
    }
  };
  return {
    handleValidUser
  };
};
