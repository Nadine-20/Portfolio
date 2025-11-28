import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';
import Typed from 'typed.js';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Competitions from './components/Competitions';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');
  const typedRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'profile', 'skills', 'experience', 'education', 'projects', 'certificates', 'competitions', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (!typedRef.current) return undefined;
    const typed = new Typed(typedRef.current, {
      strings: [
        t('heroRole1'),
        t('heroRole2'),
      
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    });
    return () => typed.destroy();
  }, [language, t]);

  return (
    <div className={`App app-${theme}`}>
      <Header activeSection={activeSection} onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <section id="home" className="hero-section">
          <div className="hero-layout">
            <div className="hero-content">
              
              <h1 className="hero-name">
                <span>Nadine</span>
                <span>Mouadhen</span>
              </h1>
              <p className="hero-role">
                <span id="role" ref={typedRef}></span>
              </p>
              <p className="hero-description">
                {t('heroDescription')}
              </p>
              <div className="hero-buttons">
                <a href="#profile" className="btn btn-primary">{t('aboutMe')}</a>
                <a href="#contact" className="btn btn-secondary">{t('hireMe')}</a>
              </div>
              <div className="hero-socials">
                <a href="https://www.linkedin.com/in/nadine-mouadhen-3008162b3/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="mailto:mouadhennadine1s3@gmail.com">
                  <FaEnvelope />
                </a>
                <a href="tel:53040844">
                  <FaPhoneAlt />
                </a>
              </div>
            </div>
            <div className="hero-figure">
              <div className="hero-photo">
                <img src={`${process.env.PUBLIC_URL}/nadine.png`} alt="Nadine Mouadhen" />
              </div>
            </div>
          </div>
          <button 
            className="floating-chat" 
            type="button" 
            aria-label={t('chatLabel')}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <FaCommentDots />
          </button>
        </section>

        <Profile />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Competitions />
        <Contact />
      </main>
      <ScrollToTop />
      <footer className="footer">
        <p>{t('footerText')}</p>
      </footer>
    </div>
  );
}

export default App;

