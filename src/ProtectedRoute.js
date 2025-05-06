import { Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from './utils/auth';

const ProtectedRoute = () => {
  const isAuthenticated = !!getCurrentUser();
  console.log('ProtectedRoute: isAuthenticated =', isAuthenticated); // Debug
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;