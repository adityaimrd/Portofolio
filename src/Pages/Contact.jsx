// portofolio/src/pages/Contact.jsx
import React, { useState } from 'react'; // Import useState
import SectionHeader from '../components/SectionHeader/SectionHeader';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import styles from './Contact.module.css';

import homeBackgroundImage from '../assets/home-background.png'; 

const Contact = () => {
  // State untuk mengelola notifikasi dan status
  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const [notificationMessage, setNotificationMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // State untuk input form

  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOz8GDKyI6sWIHetNFHCO2ZVZIn5Eg2f42dXQYsI26igypPpKVBDvj8yeYzoosYGcb7w/exec"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah redirect halaman

    setSubmissionStatus('sending');
    setNotificationMessage('Sending message...');

    // Membuat objek FormData dari form untuk memudahkan pengambilan data
    const formElement = event.target;
    const data = new FormData(formElement);
    
    // Mengubah FormData menjadi URL-encoded string
    const params = new URLSearchParams(data);

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: params, 
        redirect: 'follow', // Pastikan fetch mengikuti redirect Apps Script jika ada
        mode: 'no-cors' // Penting untuk Apps Script karena respons aslinya adalah CORS
      });

      setSubmissionStatus('success');
      setNotificationMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Kosongkan formm

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      setNotificationMessage('Failed to send message. Please try again.');
    } finally {
      setTimeout(() => {
        setSubmissionStatus(null);
        setNotificationMessage('');
      }, 5000); // Notifikasi akan hilang setelah 5 detik
    }
  };

  return (
    <div id="contact" className={styles.contactPage} style={{ backgroundImage: `url(${homeBackgroundImage})` }}> 
      <main className={styles.mainContent}>
        <SectionHeader 
          title="CONTACTS" 
          subtitle="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" 
        />

        <section className={styles.contactSection}>
          <div className={styles.formColumn}>
            {/* Tambahkan onSubmit handler */}
            <form name="contact" onSubmit={handleSubmit} className={styles.contactForm}>
              
              <InputField label="Name" type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} />
              <InputField label="Email" type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
              <InputField label="Message" isTextArea={true} name="message" placeholder="Enter Your Message" value={formData.message} onChange={handleChange} />
              
              <Button type="submit" disabled={submissionStatus === 'sending'}>
                {submissionStatus === 'sending' ? 'SENDING...' : 'SUBMIT'}
              </Button>
            </form>

            {/* Area Notifikasi */}
            {notificationMessage && (
              <div className={`${styles.notification} ${styles[submissionStatus]}`}>
                {notificationMessage}
              </div>
            )}
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
        <p className={styles.copyrightText}>© Copyright 2025. Made by Aditya Imam Ramadhan</p>
      </footer>
    </div>
  );
};

export default Contact;