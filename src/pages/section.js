// section.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import zeroimg from '../assets/zeroimg.jpg';

const Section = ({ textEnter, textLeave }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = () => {
      controls.start({ y: [0, -5, 5, -5, 5, 0], transition: { duration: 1, repeat: Infinity } });
    };
  
    animateScroll();
  }, [controls]);
  

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>The</h1>
            <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Dreamd<Image className={styles.zeroimg} src={zeroimg} width={100} height={100} alt="Zero Image" style={{ borderRadius: '80px' }} />se
            </h2>
          </motion.div>
        </div>

        <motion.div className={styles.scrollup} animate={controls} >
          SCROLL ↓
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
