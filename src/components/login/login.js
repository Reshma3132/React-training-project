import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
     
      axios
        .post("http://localhost:3031/register", { email, password })
        .then((response) => {
          if (response.status === 200) {
            alert("User added successfully!");
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  
    


  return (
   
    <div className="login-container">
      <form className="login-form">
        <h2 className='frm'> SignIn Form </h2>
        <div className="form-group">

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <FontAwesomeIcon icon ={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <Link to="/register">
          <button className='signup-btn' type="button" onClick={handleLogin}>
            SignUp
          </button>
        </Link>
        <Link to="/">
          <button className='signin-btn' type="button" onClick={handleLogin}>
            SignIn
          </button>
        </Link>
      </form>
    </div>
   
  );
            }


export default Login;
