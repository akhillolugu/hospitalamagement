import React, { useState } from 'react';
import './Doctor.css'; // Import your patient component styles

const Doctor = () => {
  // State for patient-related data
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    mobileNumber: '', // Add mobileNumber to patient data
    specialation :'',
    needAppoinment : '',
  });

  // Handle changes in patient data
  const handlePatientDataChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle submission of patient data
  const handlePatientSubmit = (e) => {
    e.preventDefault();
    console.log('Patient Data:', patientData);
    alert("Thanks for updating your details")
    // Add logic here to handle the patient data, such as sending it to the server

    // Clear input fields after handling the patient data
    setPatientData({
      name: '',
      age: '',
      mobileNumber: '',
      specialation :'',
      needAppoinment :'',
    });
  };

  return (
    <div className="patient-container">
      <form className="patient-form" onSubmit={handlePatientSubmit}>
        <h2 style={{ textAlign: 'center', color: '#333333' }}>Enter Your Details</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={patientData.name}
          onChange={handlePatientDataChange}
          required
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={patientData.age}
          onChange={handlePatientDataChange}
          required
        />
        <br />
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel" // Use type="tel" for phone numbers
          id="mobileNumber"
          name="mobileNumber"
          value={patientData.mobileNumber}
          onChange={handlePatientDataChange}
          required
        />
        <br />
        <label htmlFor="condition">Specialization and Experience : </label>
        <textarea
          id="specialation"
          name="specialation"
          value={patientData.specialation}
          onChange={handlePatientDataChange}
          required
        ></textarea>
        <br />
        <label htmlFor="name">Is Available Y?N:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={patientData.name}
          onChange={handlePatientDataChange}
          required
        />
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
          Save Information
        </button>
      </form>
    </div>
  );
};

export default Doctor;