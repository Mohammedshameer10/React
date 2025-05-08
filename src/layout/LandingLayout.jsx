import AppBar from '../components/AppBar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function LandingLayout() {
  return (
    <>
      <AppBar />
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
