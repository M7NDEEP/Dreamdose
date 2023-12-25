import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from "../styles/Home.module.css"
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = ({ textEnter, textLeave }) => {
  const controls = useAnimation();
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
  }, [controls]);

  return (
    <>
      <nav className={styles.navcont}>
        {/* Hamburger icon */}
        <div className={styles.hamburger} onClick={() => setMenuVisible(!menuVisible)}>
          <FaBars />
        </div>

        <motion.div
          className={styles.logo}
          id='logo'
          initial={{ y: -100, opacity: 0 }}
          animate={controls}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          DreamDose
        </motion.div>
        <ul id='navitems'>
          <motion.li initial={{ y: -100, opacity: 0 }} animate={controls}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </motion.li>
          <motion.li initial={{ y: -100, opacity: 0 }} animate={controls}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
            <Link className={styles.link} href="/allblogs">
              Blog
            </Link>
          </motion.li>
          <motion.li initial={{ y: -100, opacity: 0 }} animate={controls}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </motion.li>
          <motion.li initial={{ y: -100, opacity: 0 }} animate={controls}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
            <Link
              className={styles.link}
              href='https://www.linkedin.com/in/mandeep-yadav-58227925b/'
              target='_blank'
            >
              Contact
            </Link>
          </motion.li>
        </ul>
        <motion.div
          id='signup'
          className={styles.signup}
          initial={{ y: -100, opacity: 0 }}
          animate={controls}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <Link className={styles.link} href="/login">
            Admin
          </Link>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;