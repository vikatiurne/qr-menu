import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Dashboard = lazy(() => import('@/hoc/loyouts/Dashboard/Dashboard'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Login = lazy(() => import('@/pages/Auth/Login/Login'));
const Registration = lazy(
  () => import('@/pages/Auth/Registration/Registration')
);
const PasswordRecovery = lazy(
  () => import('@/pages/Auth/PasswordRecovery/PasswordRecovery')
);
const NewPassword = lazy(() => import('@/pages/Auth/NewPassword/NewPassword'));
const ProtectedRoute = lazy(() => import('@/router/ProtectedRoute '));
const RestaurantHome = lazy(
  () => import('@/pages/RestaurantHome/RestaurantHome')
);
const RestaurantPages = lazy(
  () => import('@/hoc/loyouts/RestaurantPages/RestaurantPages')
);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<PasswordRecovery />} />
        <Route path="/recovery-password" element={<NewPassword />} />
        <Route
          path="/restaurant"
          element={<ProtectedRoute element={<RestaurantHome />} />}
        />
        <Route path="/restaurant/*" element={<RestaurantPages />} />
      </Route>
    </Routes>
  );
};

export default Router;
