// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button/Button';
import styles from './Home.module.css'; // CSS untuk Home page

const Home = () => {

  return (
    <div id="home" className={styles.homePage}>
      <div className={styles.heroSection}>
        <h1>HEY, I'M ADITYA IMAM RAMADHAN</h1>
        <p>Transforming Concepts to Code & Design: Creating Impactful Digital Products with Software Engineering Expertise and Innovative UI/UX</p>
        <Button href="#projects">
          PROJECTS
        </Button>
      </div>
    </div>
  );
};

export default Home;