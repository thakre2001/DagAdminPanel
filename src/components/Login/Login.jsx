import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Login.css';
import { apiServices } from '../../services/apiServices';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState(''); // For error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setLoggedInUser((prevState) => ({
      ...prevState, [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await apiServices.loginUser(loggedInUser)
      console.log(response)

      if (response.status === 200) {
        const data = await response.data; // Assuming your backend returns a token or user info
        localStorage.setItem('token', data.token); // Store the token (or user info)
        localStorage.setItem('loginTime', Date.now());
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        const errorData = await response.data; // Try to parse error response from backend
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

  useEffect(() => {
    const sessionDuration = 60 * 1000;
    const checkSession = () => {
      const loginTime = localStorage.getItem('loginTime');

      if (loginTime && Date.now() - loginTime > sessionDuration) {
        localStorage.removeItem('token')
        localStorage.removeItem('loginTime')
        alert("Session expired , Please login again...")
        navigate('/login')
      }
    }    

    const interval = setInterval(()=>{
      checkSession()
    },1000);

    return () => clearInterval(interval);

  }, [])

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
              name='email'
              value={loggedInUser.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              value={loggedInUser.password}
              onChange={handleChange}
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