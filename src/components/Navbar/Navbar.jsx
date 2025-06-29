// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // Import CSS Module
import profilePic from '../../assets/profile.png'; // Pastikan Anda menempatkan foto profil di src/assets

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img src={profilePic} alt="Aditya Imam Ramadhan" className={styles.profilePic} />
        <span className={styles.name}>ADITYA IMAM RAMADHAN</span>
      </div>
      <ul className={styles.navLinks}>
        {/* Gunakan <a> tag dengan href ke ID section */}
        {/* Anda bisa menambahkan logika kelas 'active' manual dengan JavaScript
            jika ingin highlight link saat section tertentu sedang di view,
            tetapi untuk saat ini kita biarkan sederhana. */}
        <li><a href="#home" className={styles.navLink}>HOME</a></li>
        <li><a href="#about" className={styles.navLink}>ABOUT</a></li>
        <li><a href="#projects" className={styles.navLink}>PROJECTS</a></li>
        <li><a href="#contact" className={styles.navLink}>CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;