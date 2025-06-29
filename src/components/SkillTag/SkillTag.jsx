// portofolio/src/components/SkillTag/SkillTag.jsx
import React from 'react';
import styles from './SkillTag.module.css';

const SkillTag = ({ children }) => {
  return (
    <span className={styles.skillTag}>
      {children}
    </span>
  );
};

export default SkillTag;