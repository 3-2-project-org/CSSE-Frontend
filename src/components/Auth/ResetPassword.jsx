import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [passwordData, setPasswordData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/reset-password', passwordData);
      setMessage(response.data.message);
      // Handle password reset success or failure
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={passwordData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={passwordData.password}
          onChange={handleChange}
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
