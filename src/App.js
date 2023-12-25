import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Login from './components/connect/Login';
import Register from './components/connect/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute'; // Ensure this is the correct path

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Replace with actual auth logic
  
  const handleLoginSuccess = () => {
    setUserLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
        <Route path="/login" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Register onLoginSuccess={handleLoginSuccess}/>} />

          <Route path="/dashboard" element={
            <ProtectedRoute userLoggedIn={userLoggedIn}>
              <Dashboard  userLoggedIn={userLoggedIn}/>
            </ProtectedRoute>
          } />
          <Route path="*" element={<Typography>Page Not Found</Typography>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
