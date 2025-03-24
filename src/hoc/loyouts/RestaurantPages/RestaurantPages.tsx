import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '@/components/Sidebar/Sidebar';
import RestaurantPagesRouter from '@/router/RestaurantPagesRouter';

const RestaurantPages: React.FC = () => {
  return (
    <div className="flex flex-1 ">
      <Sidebar />
      <RestaurantPagesRouter />
      <Outlet />
    </div>
  );
};

export default RestaurantPages;
