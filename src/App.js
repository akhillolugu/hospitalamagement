import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Componets/Home';
import Login from './Componets/Login';
import Signup from './Componets/Signup';
import './App.css';
import Patient from './Componets/Patient';
import HomeIcon from '@mui/icons-material/Home'; // Import the Home icon
// Example of correct import and usage
import Doctor from './Componets/Doctor';

// Inside your component where routing is handled
<Route path="/doctor" component={Doctor} />

function App() {
  return (
    <Router>
      <div className="app-container">
        <Link to="/">
          <div className="home-icon">
            <HomeIcon fontSize="large" style={{ color: 'red' }} />
          </div>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// export default App;
