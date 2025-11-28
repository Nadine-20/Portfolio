import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaGlobeAmericas, FaRobot, FaDatabase, FaTools } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Skills.css';

const skillsData = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    items: ['Python', 'C', 'Java', 'JavaScript', 'PHP', 'HTML/CSS', 'VHDL']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FaGlobeAmericas />,
    items: ['Spring Boot', 'Angular', 'ReactJS', 'Flask','Flutter']
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    items: ['MySQL', 'Oracle', 'MongoDB', 'Firebase']
  },
  {
    title: 'IoT & Embedded Tools',
    icon: <FaRobot />,
    items: ['Arduino', 'ESP32', 'EasyEDA', 'Fritzing', 'Packet Tracer']
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    items: ['Git', 'GitHub', 'Microsoft Office (Word, Excel, Access, PowerPoint)','Android Studio']
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">{t('skillsTitle')}</h2>
        <p className="skills-subtitle">
          Technologies and tools I&apos;ve worked with and continue to develop expertise in.
        </p>
      </div>
      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div
            key={group.title}
            className={`skills-card ${isVisible ? 'skills-card-visible' : ''}`}
            style={isVisible ? { transitionDelay: `${index * 0.08}s` } : {}}
          >
            <div className="skills-card-header">
              <div className="skills-icon">{group.icon}</div>
              <h3 className="skills-title">{group.title}</h3>
            </div>
            <div className="skills-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

