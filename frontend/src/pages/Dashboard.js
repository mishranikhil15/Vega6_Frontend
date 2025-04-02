import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://vega6-backend.onrender.com/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        alert('Error fetching blogs');
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`https://vega6-backend.onrender.com/api/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBlogs(blogs.filter(blog => blog._id !== id));
      } catch (error) {
        alert('Error deleting blog');
      }
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="add-blog-button" onClick={() => navigate('/add-blog')}>Add Blog</button>
      </div>

      <table className="blog-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map(blog => (
            <tr key={blog?._id}>
              <td>
                {blog?.image && (
                  <img 
                  src={`https://vega6-backend.onrender.com/uploads/${blog.image}`} 
                  alt="Blog" 
                  className="blog-thumbnail" 
                  style={{ width: '100px', height: '60px', objectFit: 'cover' }}
                />
                )}
              </td>
              <td>{blog?.title}</td>
              <td>{blog?.description}</td>
              <td>
                <button className="action-button view" onClick={() => navigate(`/view-blog/${blog?._id}`)}>View</button>
                <button className="action-button edit" onClick={() => navigate(`/edit-blog/${blog?._id}`)}>Edit</button>
                <button className="action-button delete" onClick={() => handleDelete(blog._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
