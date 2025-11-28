import React from 'react';
import { FaLanguage } from 'react-icons/fa';
import './Languages.css';

const Languages = () => {
  const languages = [
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'French', level: 'Fluent', percentage: 90 },
    { name: 'Turkish', level: 'Basic', percentage: 30 },
    { name: 'Arabic', level: 'Native', percentage: 100 }
  ];

  return (
    <section id="languages" className="languages-section">
      <h2 className="section-title">Languages</h2>
      <div className="languages-container">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <div className="language-header">
              <div className="language-icon">
                <FaLanguage />
              </div>
              <div className="language-info">
                <h3 className="language-name">{lang.name}</h3>
                <span className="language-level">{lang.level}</span>
              </div>
            </div>
            <div className="language-progress">
              <div 
                className="language-progress-bar" 
                style={{ width: `${lang.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

