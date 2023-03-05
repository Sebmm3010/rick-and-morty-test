import React, { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context';
import { UiProvider } from '../../context/ui';

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <UiProvider>{children}</UiProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};
