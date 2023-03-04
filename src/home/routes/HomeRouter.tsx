import { Navigate, Route, Routes } from 'react-router-dom';
import { Capitulos, Lugares, Personajes } from '../pages';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Personajes />} />
      <Route path="/episodes" element={<Capitulos />} />
      <Route path="/locations" element={<Lugares />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
