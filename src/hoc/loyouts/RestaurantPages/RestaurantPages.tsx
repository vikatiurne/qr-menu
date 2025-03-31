import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import RestaurantPagesRouter from '@/router/RestaurantPagesRouter';

const RestaurantPages: React.FC = () => {
  return (
    <div>
      <Suspense>
        <RestaurantPagesRouter />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RestaurantPages;
