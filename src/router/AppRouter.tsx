import { Routes, Route, Navigate } from 'react-router';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { HomeRoutes } from '../home/routes/HomeRouter';
import { useContext } from 'react';
import { AuthContext } from '../context';

export const AppRouter = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Routes>
      {auth ? (
        // Ruta principal
        <Route path="/*" element={<HomeRoutes />} />
      ) : (
        // Ruta de autenticacion
        <Route path="auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
