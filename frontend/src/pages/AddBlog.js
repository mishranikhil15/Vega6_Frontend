
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddBlog.css'; // Import the CSS file

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      const token = localStorage.getItem('token');
      await axios.post('https://vega6-backend.onrender.com/api/blogs/create', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/dashboard');
    } catch (error) {
      alert('Error adding blog');
    }
  };

  return (
    <div className="add-blog-container">
      <h2>Add Blog</h2>
      <form className="add-blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-field"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="textarea-field"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="file-input"
          required
        />
        <button type="submit" className="submit-button">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
