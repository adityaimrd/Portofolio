// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button/Button';
import styles from './Home.module.css'; // CSS untuk Home page

const Home = () => {

  return (
    <div id="home" className={styles.homePage}>
      <div className={styles.heroSection}>
        <h1>HEY, I'M ADITYA IMAM RAMADHAN</h1>
        <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
        <Button href="#projects">
          PROJECTS
        </Button>
      </div>
    </div>
  );
};

export default Home;