import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav style={{
      width: '100px',
      backgroundColor: 'brown', // Darker blue for higher contrast
      padding: '1rem',
      height: '100vh',
      boxSizing: 'border-box',
      color: '#fff' // Text color changed to white for better visibility
    }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link></li>
        <li><Link to="/users" style={{ color: '#fff', textDecoration: 'none' }}>Users</Link></li>
      </ul>
    </nav>
  );
}