import { Routes, Route, Navigate } from 'react-router';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { HomeRoutes } from '../home/routes/HomeRouter';

export const AppRouter = () => {
  const statusAuth = false;
  return (
    <Routes>
      {statusAuth ? (
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
