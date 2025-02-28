import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Menu = lazy(() => import('@/pages/RestaurantPages/Menu/Menu'));
const Tables = lazy(() => import('@/pages/RestaurantPages/Tables/Tables'));
const Support = lazy(() => import('@/pages/RestaurantPages/Support/Support'));
const Settings = lazy(
  () => import('@/pages/RestaurantPages/Settings/Settings')
);

const RestaurantPagesRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="menu" element={<Menu />} />
      <Route path="tables" element={<Tables />} />
      <Route path="support" element={<Support />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default RestaurantPagesRouter;
