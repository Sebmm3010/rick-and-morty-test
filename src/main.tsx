import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from './components/layouts';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <MainLayout>
    <App />
  </MainLayout>
  // </React.StrictMode>
);
