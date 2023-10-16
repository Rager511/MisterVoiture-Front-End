import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GaragesPage from './pages/management/GaragesPage';
import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/management/ServicesPage';
import TechniciansPage from './pages/management/TechniciansPage';
import SignInPage from './pages/authentification/SignInPage';
import SignUpPage from './pages/authentification/SignUpPage';
import NotificationPage from './pages/NotificationPage';
import RequestsPage from './pages/management/RequestsPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/authentication/signIn" element={<SignInPage />} />
      <Route path="/authentication/signUp" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/requests" element={<RequestsPage />} />
      <Route path="/garages" element={<GaragesPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/technicians" element={<TechniciansPage />} />
    </Routes>
  </BrowserRouter>
);