import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { loginUser } from '../../api/connect'; // Import the login function from your API

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await loginUser(email, password); // Call your login API function
      if (response.data.message && response.data.token || response.status == 200 ) {
        await localStorage.setItem('token', response.data.token);
        await onLoginSuccess();
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading}>
          Login
        </Button>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </form>
    </Container>
  );
}

export default Login;
