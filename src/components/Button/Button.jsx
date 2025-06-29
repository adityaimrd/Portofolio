// portofolio/src/components/Button/Button.jsx
import React from 'react';
import styles from './Button.module.css';

// Tambahkan prop 'href' dan 'type'
const Button = ({ children, onClick, href, type = 'button', variant = 'primary', className = '' }) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;

  // Jika ada 'href', render sebagai elemen <a>
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  // Jika tidak ada 'href', render sebagai elemen <button>
  return (
    <button
      type={type} // Bisa 'button', 'submit', 'reset'
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;