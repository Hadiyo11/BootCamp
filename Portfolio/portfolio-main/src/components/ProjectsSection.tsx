// TODO: Add a LOAD MORE button after 3 loaded projects
// TODO: Optimize images using 'next/image'
// TODO: Transform images grid into a rolling caroussel and include desktop images as well
// TODO: Maybe clicking the images should open a full screen caroussel
// TODO: At the end of all projects, put a "And a lot more on my Github" or "Like what you see? Get in touch!"

import React, { ReactElement } from 'react';

import styles from '../styles/components/ProjectsSection.module.scss';

import { projects } from '../../projects_data.js';

import SectionHeader from './SectionHeader';
import Button from './Button';
import SkillTag from './SkillTag';

interface Props {
  
}

function ProjectsSection({}: Props): ReactElement {
  function openLinkInNewTab(link) {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div className={styles.container}>
      <SectionHeader title="Featured Projects" align="left" />

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => {
          if (index > 2) return;

          return (
            <div key={project.title} className={styles.projectWrapper}>
              <div className={styles.imagesWrapper}>
                {project.photos.map((photo, i) => {
                  return (
                    <img
                      key={`${project.title}-img-${i}`}
                      className={i > 0 ? styles.desktopOnly : ''}
                      src={photo}
                      alt="Preview pic"
                      style={{ width: '100%' }}
                    />
                  );
                })}
              </div>

              <div className={styles.projectDetails}>
                <h1>{project.title}</h1>

                <div className={styles.skillsContainer}>
                  {project.tools.map((tool) => {
                    return <SkillTag key={tool} skillName={tool} />;
                  })}
                </div>
                <p>{project.description}</p>

                <div className={styles.buttonsWrapper}>
                  <Button
                    onClick={() => {
                      openLinkInNewTab(project.githubUrl);
                    }}
                    type="button"
                    text="Review the code"
                    isPrimary={false}
                  ></Button>

                  <Button
                    onClick={() => {
                      openLinkInNewTab(project.liveDemoUrl);
                    }}
                    type="button"
                    text="See it live"
                    isPrimary
                  ></Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;


// // components/Projects.tsx

// import React from 'react';
// import './Projects.css';

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// const projects: Project[] = [
//   {
//     title: 'Movie Review App',
//     description: 'Description of project 1...',
//     image: 'project1.jpg',
//     link: 'https://example.com/project1',
//   },
//   {
//     title: 'Project 2',
//     description: 'Description of project 2...',
//     image: 'project2.jpg',
//     link: 'https://example.com/project2',
//   },
//   {
//     title: 'Project 3',
//     description: 'Description of project 3...',
//     image: 'project3.jpg',
//     link: 'https://example.com/project3',
//   },
// ];

// const Projects: React.FC = () => {
//   return (
//     <div className="content">
//       <h2>My Projects</h2>
//       <ul className="projects-list">
//         {projects.map((project, index) => (
//           <li key={index} className="project-item">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <img src={project.image} alt={project.title} className="project-image" />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Projects;