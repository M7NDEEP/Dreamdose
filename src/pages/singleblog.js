import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import card1 from '../assets/card1.jpg';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';

const SingleBlog = ({ textEnter, textLeave }) => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState({});
  useEffect(() => {
    if (id) {
      fetch(`https://dreamdose-backend.onrender.com/getblog/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setBlog(data))
        .catch((error) => console.error('Error fetching blog post:', error));
    }
  }, [id]);

  
  return (
    <>
      <br />
      <div className={styles.singleblogcont}>
        <h1>{blog.title}</h1>
        <div className={styles.mainsingleblogcont}>
          <img className={styles.singleblogcardimg} src={blog.imageurl} alt="No Image" />
          <p onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
            <span>{blog.author} | {blog.Date}</span>
            <br />
            {blog.description}
          </p>
        </div>
        <div className={styles.blogicon}>
          <FaRegThumbsUp size={20} className={styles.blogiconmargin} />
          <FaRegThumbsDown size={20} className={styles.blogiconmargin} />
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </>
  );
};

export default SingleBlog;
