// portofolio/src/pages/About.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import SkillTag from '../components/SkillTag/SkillTag';
import Button from '../components/Button/Button'; // Import Button
import styles from './About.module.css';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'GIT', 'Figma', 'Github', 'React', 'CorelDraw', 'Vue', 'Tailwind'
  ];

  return (
    <div id="about" className={styles.aboutPage}>

      <main className={styles.mainContent}>
        <SectionHeader 
          title="ABOUT ME" 
          subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology" 
        />

        <section className={styles.aboutSection}>
          <div className={styles.skillsColumn}>
            <h3>My Skills</h3>
            <div className={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </div>
          </div>

          <div className={styles.bioColumn}>
            <h3>Get to know me!</h3>
            <p>
              I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product.
            </p>
            <p>
              I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.
            </p>
            <p>
              Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/aditya-imam-ramadhan-586198335/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a> and <a href="https://www.instagram.com/adty.imrd?igsh=MTQzYjVzZmNwMm83Ng==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a> where I post useful content related to Web Development and Programming.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
            <Button onClick={() => window.location.href = '#contact'}>
              CONTACT
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;