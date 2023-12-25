import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const Createblog = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    author: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dreamdose-backend.onrender.com/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        console.log('Blog created successfully!');
        alert("Blog created successfully!")
      } else {
        console.error('Failed to create blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.createblog}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title of the blog"
          value={blogData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Enter Description of the blog"
          value={blogData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="author"
          placeholder="Enter Author name"
          value={blogData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Paste the Image url"
          value={blogData.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Createblog;
