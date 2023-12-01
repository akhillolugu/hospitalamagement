import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="topbar">
        <h1 id="hosp">Hospital Registration Portal</h1>
      </header>
      <main className="middlebar">
        <h1 className="welcome-text">Welcome to our registration portal</h1>
        <p>If you're looking for health assistance, you must register...</p>
        <div className='role'>
          <h2>Choose your role</h2>
          <div className="role-buttons">
            <Link to="/patient" className="nav-link">
              <button className="role-button" id="patient-button">
                Patient
              </button>
            </Link>
            <Link to="/login" className="nav-link">
              <button className="role-button" id="doctor-button">
                Doctor
              </button>
            </Link>
            <Link to="/login" className="nav-link">
              <button className="role-button" id="admin-button">
                Administrator
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;