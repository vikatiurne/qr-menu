import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@/hoc/Container/Container';
import Header from '@/components/Header/Header';

const Dashboard = () => {
  return (
    <div>
      <Suspense>
        <Container>
          <Header />
        </Container>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Dashboard;
