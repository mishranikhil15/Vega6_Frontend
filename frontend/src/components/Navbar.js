
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Sign Up</Link>
      <Link className="nav-link" to="/login">Login</Link>
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
