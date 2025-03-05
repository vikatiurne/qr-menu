import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@/hoc/Container/Container';
import Header from '@/components/Header/Header';
import cn from '@/utils/cn';

const Dashboard: React.FC = () => {
  const { pathname } = useLocation();
  const restaurantPath = pathname.includes('/restaurant');

  return (
    <div>
      <Suspense>
        <Container
          padding={cn(
            !restaurantPath && 'px-36',
            'tablet:px-11 mobile:px-4',
            restaurantPath && 'tablet:px-0 mobile:px-0'
          )}
          maxWidth={cn(restaurantPath && 'max-w-none')}
        >
          <Header />
        </Container>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Dashboard;
