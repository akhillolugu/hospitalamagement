import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
// import Signup from './Signup'; // Import the Signup component
// import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login Data:', { username, password });
    // Add logic here to handle the login data, such as sending it to the server for authentication
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 style={{ textAlign: 'center', color: '#333333' }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Link to="/doctor" className="nav-link">
        <button
          type="submit"
          style={{
            margin: '10px 0',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#3b5998',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Login
        </button>
        </Link>
        <br />
        <p>
          Don't Have An Account ?{' '}
          <Link to="/signup" className="signup-link">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;