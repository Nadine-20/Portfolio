import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperclip, FaVideo, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const contactInfo = {
    email: 'mouadhennadine1s3@gmail.com',
    phone: '53040844',
    location: 'Sousse, Tunisia',
    linkedin: 'https://www.linkedin.com/in/nadine-mouadhen-3008162b3/',
    github: 'https://github.com/Nadine-20'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer l'email
    // Par exemple avec EmailJS ou un backend
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t('contactTitle')}</h2>
      <div className="contact-container">
        <div className="contact-info-column">
          <h3 className="contact-heading">{t('contactHeading')}</h3>
          <p className="contact-subtitle">{t('contactSubtitle')}</p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <FaEnvelope className="detail-icon" />
              <div>
                <span className="detail-label">{t('email')}</span>
                <a href={`mailto:${contactInfo.email}`} className="detail-value">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <FaPhone className="detail-icon" />
              <div>
                <span className="detail-label">{t('phone')}</span>
                <a href={`tel:${contactInfo.phone}`} className="detail-value">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <div>
                <span className="detail-label">{t('location')}</span>
                <span className="detail-value">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>

          <div className="cv-buttons-container">
            <button 
              type="button"
              className="cv-video-btn"
              onClick={() => setIsVideoOpen(true)}
            >
              <FaVideo />
              <span>{t('cvVideo')}</span>
            </button>
            <a 
              href={`${process.env.PUBLIC_URL}/Nadine-Mouadhen-Resume.pdf.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv-btn"
            >
              <FaPaperclip />
              <span>{t('downloadCV')}</span>
            </a>
          </div>

          {/* Video Modal */}
          {isVideoOpen && (
            <div className="video-modal" onClick={() => setIsVideoOpen(false)}>
              <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="video-modal-close" 
                  onClick={() => setIsVideoOpen(false)}
                  aria-label="Close video"
                >
                  <FaTimes />
                </button>
                <video 
                  controls 
                  autoPlay
                  className="cv-video-modal"
                  poster={`${process.env.PUBLIC_URL}/cv-video-poster.jpg`}
                >
                  <source src={`${process.env.PUBLIC_URL}/cv-video.mp4`} type="video/mp4" />
                  <source src={`${process.env.PUBLIC_URL}/cv-video.webm`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>

        <div className="contact-form-column">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t('yourName')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t('yourEmail')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={t('subject')}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t('yourMessage')}
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                {t('sendMessage')}
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

