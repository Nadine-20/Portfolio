import React from 'react';
import { FaCalendarAlt, FaUniversity, FaAward } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Education.css';

const Education = () => {
  const { t } = useLanguage();
  const education = [
    {
      institution: 'Higher Institute of Computer Science and Communication Technologies (ISITCom)',
      program: 'B.Eng. in Computer Systems Engineering (IoT & Embedded Systems)',
      period: '09/2023 - 06/2026',
      location: 'Sousse, Tunisia',
      achievement: null,
      description: 'Specialized in modern embedded systems and IoT technologies'
    },
    {
      institution: 'Ali Bourguiba High School, Sousse',
      program: 'Baccalaureate in Mathematics',
      period: '2022 - 2023',
      location: 'Sousse, Tunisia',
      achievement: null,
      description: null
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">{t('educationTitle')}</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="timeline-marker"></div>
            <div className="education-content">
              <div className="education-header">
                <div className="education-institution">
                  <FaUniversity className="icon" />
                  <span className="institution-name">{edu.institution}</span>
                  <span className="education-period">
                    <FaCalendarAlt className="icon" />
                    {edu.period}
                  </span>
                </div>
                <h3 className="education-program">{edu.program}</h3>
                {edu.achievement && (
                  <div className="education-badge">
                    <FaAward className="badge-icon" />
                    <span>{edu.achievement}</span>
                  </div>
                )}
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

