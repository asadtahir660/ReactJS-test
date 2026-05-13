import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { Spinner } from '../ui/Spinner';
export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return (<div className="flex min-h-screen items-center justify-center bg-surface">
        <Spinner label="Checking your session"/>
      </div>);
    }
    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }}/>;
    }
    return children;
}
