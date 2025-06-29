// portofolio/src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';
import SkillTag from '../SkillTag/SkillTag'; // Import SkillTag
import Button from '../Button/Button';     // Import Button

const ProjectCard = ({ imageSrc, title, description, techStack, liveLink }) => { 
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.projectImage} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <SkillTag key={index}>{tech}</SkillTag>
          ))}
        </div>
        <div className={styles.links}>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button>LIVE LINK</Button>
            </a>
          )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;