import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem('token', 'dummy-token');
      navigate('/');
    } else {
      alert('Enter email and password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ padding: '2rem' }}>
        <h2>Login</h2>
        <input
          type="email"  
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', margin: '0.5rem 0' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', margin: '0.5rem 0' }}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4', 
  }
};
