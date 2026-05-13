import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { DashboardPage } from './pages/DashboardPage';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { UserDetailsPage } from './pages/UserDetailsPage';
import { UsersPage } from './pages/UsersPage';
export default function App() {
    return (<Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignupPage />}/>
      <Route path="/dashboard" element={<ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>}/>
      <Route path="/users" element={<ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>}/>
      <Route path="/users/:id" element={<ProtectedRoute>
            <UserDetailsPage />
          </ProtectedRoute>}/>
      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>);
}
