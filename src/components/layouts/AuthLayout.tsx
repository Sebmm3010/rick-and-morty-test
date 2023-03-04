import { FC, ReactNode } from 'react';
import { loginImg } from '../../assets';

interface Props {
  children: ReactNode;
}
export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-screen object-cover"
          src={loginImg}
          alt="loginImg"
        />
      </div>
      {children}
    </div>
  );
};
