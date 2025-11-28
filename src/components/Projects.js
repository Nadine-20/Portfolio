import React from 'react';
import { FaCode } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: 'Smart Pet Feeder - IoT Food Dispensing System',
      subtitle: 'ESP32, Firebase, Flutter',
      icon: <FaCode />,
      date: '',
      description: 'Designed an automated pet-feeding system with food-level sensing, servo-based dispensing, blockage detection, and a mobile dashboard for remote monitoring.',
      technologies: ['ESP32', 'Firebase', 'Flutter', 'IoT']
    },
    {
      title: 'Mobile Event Management App',
      subtitle: 'Android – Java',
      icon: <FaCode />,
      date: '04/2025',
      description: 'Attendance tracking, participant list, and multi-screen navigation.',
      technologies: ['Android', 'Java']
    },
    {
      title: 'Rental Web Platform',
      subtitle: 'PHP, MySQL, HTML/CSS/JS',
      icon: <FaCode />,
      date: '02/2025',
      description: 'Full-stack app with authentication, listings, booking, and admin panel.',
      technologies: ['PHP', 'MySQL', 'HTML/CSS/JS']
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t('projectsTitle')}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-icon">
                {project.icon}
              </div>
              <div className="project-title-group">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <div className="project-date">{project.date}</div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

