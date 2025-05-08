import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Login from './pages/Login';
import LandingLayout from './layout/LandingLayout';
import ProtectedRoute from './routes/ProtectedRoutes';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route element={<LandingLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>

      </Route>
      <Route path="*" element={<Navigate to={token ? '/' : '/login'} />} />
    </Routes>
  );
}

export default App;
