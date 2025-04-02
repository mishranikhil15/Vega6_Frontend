import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
import ViewBlog from './pages/ViewBlog';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/view-blog/:id" element={<ViewBlog />} />
      </Routes>
    </>
  );
};

export default App;
