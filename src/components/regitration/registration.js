import React, { useState } from 'react';
import './registration.css';

import { Link } from 'react-router-dom';


// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div className="bgi">
      <div className='container'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle"
              onClick={handleTogglePassword}
            >
              <div className='password-icon'>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
              />
              </div>
            </span>
          </div>
        </div>

        <button className="reg-btn" type ="submit">Register</button>
      </form>
      <br></br>
      <p>Already have an account? <Link to ="/login">Sign In</Link></p>
    </div>
    </div>
  );
}

export default App;
