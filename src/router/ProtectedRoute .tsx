import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../app/store';

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return isAuth ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
