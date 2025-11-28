import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Profile.css';

const Profile = () => {
  const { t } = useLanguage();

  return (
    <section id="profile" className="profile-section">
      <h2 className="section-title">{t('aboutTitle')}</h2>
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-text">
            <p>{t('aboutText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

