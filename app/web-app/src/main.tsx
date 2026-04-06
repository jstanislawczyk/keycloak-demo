import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Admin from './pages/admin/Admin.tsx';
import Authenticated from './pages/authenticated/Authenticated.tsx';
import Public from './pages/public/Public.tsx';
import Login from './pages/login/Login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/public" element={<Public />} />
        <Route path="/authenticated" element={<Authenticated />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
