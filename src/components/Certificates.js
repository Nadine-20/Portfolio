import React from 'react';
import { FaAward } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Certificates.css';

const Certificates = () => {
  const { t } = useLanguage();
  const certificates = [
    {
      title: 'Full-Stack Development (Angular + Spring Boot)',
      image: `${process.env.PUBLIC_URL}/certificates/developpment.jpg`,
      orientation: 'horizontal'
    },
    {
      title: 'Embedded Systems ',
      image: `${process.env.PUBLIC_URL}/certificates/embarque.jpg`,
      orientation: 'horizontal'
    },
    {
      title: 'CP-FSD Certification Preparation',
      image: `${process.env.PUBLIC_URL}/certificates/certificat.png`,
      orientation: 'horizontal'
    },
    {
      title: 'Cisco – Network Fundamentals',
      image: `${process.env.PUBLIC_URL}/certificates/cisco.png`,
      orientation: 'horizontal'
    },
    
    
    {
      title: 'NVIDIA Deep Learning',
      image: `${process.env.PUBLIC_URL}/certificates/nvidia.png`,
      orientation: 'horizontal'
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-header">
        <div className="certificates-title">
          <span className="cert-icon">
            <FaAward />
          </span>
          <h2>{t('certificatesTitle')}</h2>
        </div>
        <p>Credentials that validate my journey across cloud, networking, languages, and AI.</p>
      </div>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className={`certificate-card ${cert.orientation === 'vertical' ? 'vertical' : 'horizontal'}`}>
            <div className="certificate-image">
              <img src={cert.image} alt={cert.title} />
            </div>
            <p className="certificate-text">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

