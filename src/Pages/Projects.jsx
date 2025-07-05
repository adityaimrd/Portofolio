import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

import porto1Image from '../assets/porto1.png'; 
import porto2Image from '../assets/porto2.png'; 
import porto3Image from '../assets/porto3.png'; 

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      imageSrc: porto1Image, 
      title: 'Cerita Kita',
      description: 'Cerita Kita is a project designed as a platform for storing personal stories, where each narrative can be enriched with visual and geographical elements such as maps, photos, and of course, the story itself.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
      liveLink: 'https://ceritakitaa.netlify.app/' 
    },
    {
      id: 2,
      imageSrc: porto2Image,
      title: 'APP Story',
      description: 'APP Story is a project designed as a platform for storing personal stories, where each narrative can be enriched with visual and geographical elements such as maps, photos, and of course, the story itself.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://storypa.netlify.app/' 
    },
    {
      id: 3,
      imageSrc: porto3Image,
      title: 'Eduwise',
      description: 'EduWise is a Progressive Web App (PWA) developed to help individuals identify their learning style (Visual, Auditory, Reading, or Kinesthetic) and get recommendations for appropriate learning methods.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Python'],
      liveLink: 'https://eduwise-ten.vercel.app/' 
    }
  ];

  return (
    <div id="projects" className={styles.projectsPage}>
      <main className={styles.mainContent}>
        <SectionHeader 
          title="PROJECTS" 
          subtitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study" 
        />

        <section className={styles.projectsGrid}>
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Projects;