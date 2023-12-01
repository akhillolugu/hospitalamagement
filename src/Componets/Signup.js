import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSignupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup Data:', { fullName, email, newUsername, newPassword });

    // Simulate a signup process (replace this with your actual signup logic)
    // For demonstration purposes, I'm using a setTimeout to simulate an asynchronous operation.
    setTimeout(() => {
      // Assuming signup is successful, update the state
      setSignupSuccess(true);

      // Clear input fields after handling the signup data
      setFullName('');
      setEmail('');
      setNewUsername('');
      setNewPassword('');
    }, 1000);
  };

  return (
    <div className={`signup-container ${isSignupSuccess ? 'success-background' : ''}`}>
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
