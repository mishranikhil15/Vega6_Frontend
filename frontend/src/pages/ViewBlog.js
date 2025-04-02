
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ViewBlog.css'; 

const ViewBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://vega6-backend.onrender.com/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        alert('Error fetching blog');
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div className="loading">Loading...</div>;

  return (
    <div className="view-blog-container">
      <h2 className="blog-title">{blog?.title}</h2>
      {blog.image && (
        <img 
          src={`https://vega6-backend.onrender.com/uploads/${blog?.image}`} 
          alt="Blog" 
          className="blog-image" 
        />
      )}
      <p className="blog-description">{blog?.description}</p>
    </div>
  );
};

export default ViewBlog;
