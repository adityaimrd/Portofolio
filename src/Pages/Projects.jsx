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
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
      liveLink: 'https://ceritakitaa.netlify.app/' 
    },
    {
      id: 2,
      imageSrc: porto2Image,
      title: 'APP Story',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://storypa.netlify.app/' 
    },
    {
      id: 3,
      imageSrc: porto3Image,
      title: 'Eduwise',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
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