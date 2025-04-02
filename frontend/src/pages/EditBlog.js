
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditBlog.css'; 

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://vega6-backend.onrender.com/api/blogs/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        alert('Error fetching blog');
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://vega6-backend.onrender.com/api/blogs/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/dashboard');
    } catch (error) {
      alert('Error updating blog');
    }
  };

  return (
    <div className="edit-blog-container">
      <h2>Edit Blog</h2>
      <form className="edit-blog-form" onSubmit={handleSubmit}>
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
        />
        <button type="submit" className="submit-button">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
