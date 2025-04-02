
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div>
      <h3>{blog?.title}</h3>
      {blog?.image && <img src={`https://vega6-backend.onrender.com/uploads/${blog?.image}`} alt="Blog" width="200" />}
      <p>{blog?.description}</p>
      <Link to={`/view-blog/${blog?._id}`}>View</Link>
      <Link to={`/edit-blog/${blog?._id}`}>Edit</Link>
    </div>
  );
};

export default BlogCard;
