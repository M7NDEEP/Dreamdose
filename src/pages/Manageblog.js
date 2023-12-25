import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Manageblog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs when the component mounts
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://dreamdose-backend.onrender.com/getblogs');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  const handleDeleteClick = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`https://dreamdose-backend.onrender.com/deleteblog/${blogId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove the deleted blog from the state
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
          console.log('Blog deleted successfully!');
        } else {
          console.error('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <>
        <div className={styles.manageblog}>
          <h2>Manage Blogs</h2>
          {blogs.map((blog) => (
            <div key={blog._id} className={styles.bloglist}>
              <h3>{blog.title.substring(0,35)}</h3>
              <button onClick={() => handleDeleteClick(blog._id)}>Delete</button>
              <button>Edit</button>
            </div>
          ))}
        </div>
    </>
  );
};

export default Manageblog;
