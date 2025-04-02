
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);

    try {
      await axios.post('https://vega6-backend.onrender.com/api/users/signup', formData);
      alert('Signup Successful');
      setEmail('');
      setPassword('');
      setProfileImage(null);
    } catch (error) {
      alert('Error during Signup');
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setProfileImage(e.target.files[0])}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
