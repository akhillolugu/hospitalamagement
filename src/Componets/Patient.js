import React, { useState } from 'react';
import './Patient.css'; // Import your patient component styles

const Patient = () => {
  // State for patient-related data
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    mobileNumber: '', // Add mobileNumber to patient data
    condition: '',
    needAppoinment :'',
    need : '',
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
    // Add logic here to handle the patient data, such as sending it to the server
     alert("Successfully Saved")
    // Clear input fields after handling the patient data
    setPatientData({
      name: '',
      age: '',
      mobileNumber: '',
      condition: '',
      need:'',
    });
  };

  return (
    <div className="patient-container">
      <form className="patient-form" onSubmit={handlePatientSubmit}>
        <h2 style={{ textAlign: 'center', color: '#333333' }}>Patient Information</h2>
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
        <label htmlFor="condition">Medical Condition:</label>
        <textarea
          id="condition"
          name="condition"
          value={patientData.condition}
          onChange={handlePatientDataChange}
          required
        ></textarea>
        <br />
        <label htmlFor="need">Need Appointment :</label>
        <input
          type="text"
          id="need"
          name="need"
          value={patientData.need}
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

export default Patient;
