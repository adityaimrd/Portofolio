// portofolio/src/pages/Contact.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import styles from './Contact.module.css';

// Gambar background dari Home Page
import homeBackgroundImage from '../assets/home-background.png'; 

const Contact = () => {
  return (
    <div id="contact" className={styles.contactPage} style={{ backgroundImage: `url(${homeBackgroundImage})` }}>
      <main className={styles.mainContent}>
        <SectionHeader 
          title="CONTACTS" 
          subtitle="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" 
        />

        <section className={styles.contactSection}>
          <div className={styles.formColumn}>
            {/* menyambungkan ke spreadsheet */}
            <form name="contact" method="POST" action="https://script.google.com/macros/s/AKfycbyOz8GDKyI6sWIHetNFHCO2ZVZIn5Eg2f42dXQYsI26igypPpKVBDvj8yeYzoosYGcb7w/exec" className={styles.contactForm}>

              <InputField label="Name" type="text" name="name" placeholder="Enter Your Name" />
              <InputField label="Email" type="email" name="email" placeholder="Enter Your Email" />
              <InputField label="Message" isTextArea={true} name="message" placeholder="Enter Your Message" />
              
              <Button type="submit">SUBMIT</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContentWrapper}>
          <div className={styles.hireMe}>
            <h3>Hire Me For Your Next Big Project!</h3>
            <p>Contact me in any convenient way to discuss your idea.</p>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/aditya-imam-ramadhan-586198335/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/adityaimrd" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://www.instagram.com/adty.imrd?igsh=MTQzYjVzZmNwMm83Ng==" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          <div className={styles.information}>
            <h3>Information</h3>
            <p>Name : Aditya Imam Ramadhan</p>
            <p>Date of birth : 27.10.2003</p>
            <p>Email : adtyimrd27@gmail.com</p>
            <p>City : Sukoharjo</p>
          </div>
        </div>
        {/* Copyright notice tetap di dalam footer, di bawah wrapper content */}
        <p className={styles.copyrightText}>© Copyright 2025. Made by Aditya Imam Ramadhan</p>
      </footer>
    </div>
  );
};

export default Contact;