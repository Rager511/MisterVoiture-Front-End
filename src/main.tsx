import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GaragesPage from './pages/management/GaragesPage';
import DashboardPage from './pages/management/DashboardPage';
import ServicesPage from './pages/management/ServicesPage';
import TechniciansPage from './pages/management/TechniciansPage';
import SignInPage from './pages/authentification/SignInPage';
import SignUpPage from './pages/authentification/SignUpPage';
import NotificationPage from './pages/management/NotificationPage';
import RequestsPage from './pages/management/RequestsPage';
import ProfilePage from './pages/ProfilePage';
import AppRoutes from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.root} element={<SignInPage />} />
      <Route path={AppRoutes.signIn} element={<SignInPage />} />
      <Route path={AppRoutes.signUp} element={<SignUpPage />} />
      <Route path={AppRoutes.profile} element={<ProfilePage />} />
      <Route path={AppRoutes.dashboard} element={<DashboardPage />} />
      <Route path={AppRoutes.notifications} element={<NotificationPage />} />
      <Route path={AppRoutes.requests} element={<RequestsPage />} />
      <Route path={AppRoutes.garages} element={<GaragesPage />} />
      <Route path={AppRoutes.services} element={<ServicesPage />} />
      <Route path={AppRoutes.technicians} element={<TechniciansPage />} />
    </Routes>
  </BrowserRouter>
);