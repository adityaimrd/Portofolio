// portofolio/src/components/SectionHeader/SectionHeader.jsx
import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.underline}></div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;