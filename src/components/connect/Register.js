import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { TextField, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { registerUser } from '../../api/connect';

function Register({ onLoginSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await registerUser(name, email, password);
      console.log(response.status)
      if(response.data.message && response.data.token || response.status == 200){
        await localStorage.setItem('token', response.data.token);
        await onLoginSuccess(); 
        navigate('/dashboard'); // Navigate to Dashboard on success
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
        Register
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          fullWidth 
          margin="normal"
          autoComplete="new-password"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading}>
          Register
        </Button>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </Container>
  );
}

export default Register;
