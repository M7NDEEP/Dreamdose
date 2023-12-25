import '@/styles/globals.css';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    // Track mouse position
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Define cursor motion variants
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  };

  // Handlers for text cursor variant
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      {/* Cursor element */}
      <motion.div
        className={styles.cursor}
        style={{ backgroundColor: "white" }}
        variants={variants}
        animate={cursorVariant}
      />

      {/* Navbar component */}
      <Navbar
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        textEnter={textEnter}
        textLeave={textLeave}
      />

      {/* Render the main component */}
      <Component {...pageProps} textEnter={textEnter} textLeave={textLeave} />
    </>
  );
}
