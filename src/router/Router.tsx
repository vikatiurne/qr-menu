import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Dashboard from '@/hoc/loyouts/Dashboard/Dashboard';

const Menu = lazy(() => import('@/pages/Menu/Menu'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Tables = lazy(() => import('@/pages/Tables/Tables'));
const Support = lazy(() => import('@/pages/Support/Support'));
const Login = lazy(() => import('@/pages/Auth/Login/Login'));
const Registration = lazy(() => import('@/pages/Auth/Registration/Registration'));
const PasswordRecovery = lazy(() => import('@/pages/Auth/PasswordRecovery/PasswordRecovery'));
const NewPassword = lazy(() => import('@/pages/Auth/NewPassword/NewPassword'));


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<PasswordRecovery />} />
        <Route path="/recovery-password" element={<NewPassword />} />
        <Route path="menu" element={<Menu />} />
        <Route path="tables" element={<Tables />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default Router;
