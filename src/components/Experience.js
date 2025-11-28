import React from 'react';
import { FaCalendarAlt, FaBriefcase, FaWrench } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      title: 'Embedded Systems Intern',
      company: 'Jobgate',
      location: 'Sousse, Tunisia',
      period: '07/2025 – 08/2025',
      responsibilities: [
        'Developed a smart home system using ESP32, sensors, actuators, and Flutter.',
        'Integrated facial recognition and managed automation rules via Firebase.'
      ],
      technologies: ['ESP32', 'Flutter', 'Firebase', 'Sensors', 'Actuators']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Elite Council Consulting',
      location: 'Remote',
      period: '06/2025 – 07/2025',
      responsibilities: [
        'Built a quiz generator with question creation, scoring, and attempt tracking.',
        'Developed REST APIs with Flask and frontend with ReactJS.'
      ],
      technologies: ['Flask', 'ReactJS', 'REST APIs']
    },
    {
      title: 'Web Application Developer Intern',
      company: 'Jobgate',
      location: 'Sousse, Tunisia',
      period: '07/2024 – 08/2024',
      responsibilities: [
        'Developed a stock management web app with CRUD, alerts, and statistics.',
        'Built backend with Spring Boot, frontend with Angular, and managed SQL database.'
      ],
      technologies: ['Spring Boot', 'Angular', 'SQL']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">{t('experienceTitle')}</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <h3 className="experience-title">{exp.title} - {exp.company}, {exp.location}</h3>
            </div>
            <div className="experience-period">
              <FaCalendarAlt className="icon" />
              <span>{exp.period}</span>
            </div>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            <div className="experience-technologies">
              <FaWrench className="tech-icon" />
              <div className="tech-tags">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

