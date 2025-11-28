import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

const Header = ({ activeSection, onToggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const menuItems = [
    { id: 'home', labelKey: 'home' },
    { id: 'profile', labelKey: 'about' },
    { id: 'projects', labelKey: 'projects' },
    { id: 'skills', labelKey: 'skills' },
    { id: 'certificates', labelKey: 'certificates' },
    { id: 'competitions', labelKey: 'competitions' },
    { id: 'contact', labelKey: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangDropdownOpen && !event.target.closest('.language-selector')) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span>NM</span>
          </div>
              <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                {menuItems.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {t(item.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="nav-actions">
                <div className="language-selector">
                  <button
                    type="button"
                    className="language-btn"
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    aria-label="Select language"
                  >
                    {language.toUpperCase()}
                  </button>
                  {isLangDropdownOpen && (
                    <div className="language-dropdown">
                      <button
                        type="button"
                        className={`language-option ${language === 'en' ? 'active' : ''}`}
                        onClick={() => {
                          changeLanguage('en');
                          setIsLangDropdownOpen(false);
                        }}
                      >
                        ENGLISH
                      </button>
                      <button
                        type="button"
                        className={`language-option ${language === 'fr' ? 'active' : ''}`}
                        onClick={() => {
                          changeLanguage('fr');
                          setIsLangDropdownOpen(false);
                        }}
                      >
                        FRANÇAIS
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="theme-toggle-btn"
                  aria-label="Toggle theme"
                  onClick={onToggleTheme}
                >
                  {theme === 'light' ? <FiMoon /> : <FiSun />}
                </button>
                <a
                  href={`${process.env.PUBLIC_URL}/Nadine-Mouadhen-Resume.pdf.pdf`}
                  className="resume-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('resume')}
                </a>
              </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

