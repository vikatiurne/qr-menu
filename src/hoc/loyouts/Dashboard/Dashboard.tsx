import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@/hoc/Container/Container';
import Header from '@/components/Header/Header';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Suspense>
        <Container padding="px-36 tablet:px-11 mobile:px-4  w-full">
          <Header />
        </Container>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Dashboard;
