import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Dashboard = () => {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Dashboard;
