import React, { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context';
import { FavoriteProvider } from '../../context/favorite';
import { UiProvider } from '../../context/ui';

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <FavoriteProvider>
            <UiProvider>{children}</UiProvider>
          </FavoriteProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};
