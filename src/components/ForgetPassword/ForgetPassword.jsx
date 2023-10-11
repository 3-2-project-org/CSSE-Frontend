import React, { useState } from 'react';
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>PrimeBuild Construction</h1>
        <h2>Log In</h2>
      </div>
      <div className="sub-header">
        <p style={{color:'#9FA2B4'}}>Enter your email and password below</p>
      </div>
      <div className="input-container">

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`password-toggle ${showPassword ? 'visible' : ''}`}
            onClick={togglePasswordVisibility}
          >
            👁️
          </i>
        </div>
      </div>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
      <button
        className="login-button"
        style={{
          width: '316px',
          height: '48px',
          flexShrink: 0,
          backgroundColor: '#3751FF',
          color: 'white',
        }}
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
