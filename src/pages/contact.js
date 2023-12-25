import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import Link from 'next/link';

const Contact = ({ textEnter, textLeave }) => {
  return (
    <>
      <div className={styles.contactcont}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className={styles.contactwhite}>
            DREAMD<Image onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.img} src={img1} width={50} height={50} alt="Zero Image" style={{ borderRadius: '80px' }} />SE →
          </div></Link>

        <Link href="/allblogs" style={{ textDecoration: "none" }}>
          <div className={styles.contactblack}>
            BL<Image onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.img} src={img2} width={50} height={50} alt="Zero Image" style={{ borderRadius: '80px' }} />G →
          </div></Link>

        <Link href="/about" style={{ textDecoration: "none" }}>
          <div className={styles.contactwhite}>AB<Image onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.img} src={img3} width={50} height={50} alt="Zero Image" style={{ borderRadius: '80px' }} />UT →
          </div></Link>

        <Link href="https://www.linkedin.com/in/mandeep-yadav-58227925b/" target='_blank' style={{ textDecoration: "none" }}>
          <div className={styles.contactblack}>
            C<Image onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.img} src={img4} width={50} height={50} alt="Zero Image" style={{ borderRadius: '80px' }} />NTACT →
          </div></Link>

        <div className={styles.footer}>CREATED WITH CARE BY MANDEEP</div>
      </div>
    </>
  );
};

export default Contact;
