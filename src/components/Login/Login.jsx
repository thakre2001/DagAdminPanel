import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('https://www.directadmissionguideline.com/api/userlogin', { // Your Spring Boot endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });
      console.log(response)

      if (response.ok) {
        const data = await response.json(); // Assuming your backend returns a token or user info
        localStorage.setItem('token', data.token); // Store the token (or user info)
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        const errorData = await response.json(); // Try to parse error response from backend
        setError(errorData.message || 'Invalid credentials'); // Display error message
        console.error('Login failed:', errorData); // Log the full error for debugging
        alert("Invalid email or password")
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Login error:', err);
      alert("Something went wrong")
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;