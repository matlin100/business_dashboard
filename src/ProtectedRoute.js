// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, userLoggedIn }) => {
  if (!userLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute; // Make sure to export the component
