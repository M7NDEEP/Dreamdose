import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles/Home.module.css';
import card1 from "../assets/card1.jpg"
import Head from 'next/head';
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpeg"
import Image from 'next/image';

const Blog = ({ textEnter, textLeave }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const blogSection = document.getElementById('blogSection');

      if (blogSection) {
        const sectionTop = blogSection.offsetTop;
        const sectionHeight = blogSection.offsetHeight;

        if (scrollY + windowHeight >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 1000, transition: { duration: 3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  };


  return (
    <div id="blogSection" className={styles.blogcont}>
    <div className={styles.hbackground}>
      <div className={styles.blogheading}>
        <h2>POPULAR BLOGS</h2>
        <h2>POPULAR BLOGS</h2>
        <h2>POPULAR BLOGS</h2>
      </div>
      </div>

      <motion.div
        className={styles.card}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
      >
        <motion.div className={styles.card1} onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Image className={styles.cardimg} src={card1} width={300} height={300} alt="Zero Image" />
          <h2>Into the Darkness : Exploring the Paranormal Phenomena</h2>
          <p>Olivia Williams</p>
        </motion.div>

        <motion.div className={styles.card2} onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Image className={styles.cardimg} src={card2} width={300} height={300} alt="Zero Image" />
          <h2>Whispers from the Other Side : Ghostly Voices Uncovered</h2>
          <p>Daniel Davis</p>
        </motion.div>

        <motion.div className={styles.card3} onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Image className={styles.cardimg} src={card3} width={300} height={300} alt="Zero Image" style={{ filter: 'grayscale()' }} />
          <h2>The Supernatural Files : Unexplained Mysteries Explored</h2>
          <p>Sophia Thompson</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;
