// portofolio/src/components/InputField/InputField.jsx
import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, type, name, placeholder, isTextArea = false, rows = 5, value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name} 
          placeholder={placeholder}
          className={`${styles.input} ${styles.textArea}`}
          rows={rows}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name} 
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;