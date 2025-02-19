import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    // If there is no token, redirect to the login page
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    // If the token exists, render the children (protected content)
    return children;
};

export default PrivateRoute;