// portofolio/src/components/InputField/InputField.jsx
import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, type, name, placeholder, isTextArea = false, rows = 5 }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name} // Penting untuk Netlify Forms
          placeholder={placeholder}
          className={`${styles.input} ${styles.textArea}`}
          rows={rows}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name} // Penting untuk Netlify Forms
          placeholder={placeholder}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default InputField;