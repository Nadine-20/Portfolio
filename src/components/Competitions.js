import React, { useState } from 'react';
import { FaTrophy, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Competitions.css';

const Competitions = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndices, setCurrentIndices] = useState({});

  const competitions = [
    {
      id: 'btech-atast',
      title: 'BTech ATAST Student Section Competition',
      description: 'Participated in the largest competition organized by the ATAST Student Section. This competition brought together students from various technical fields to showcase innovative projects, problem-solving skills, and collaborative teamwork. It was an excellent opportunity to network with peers, learn from diverse perspectives, and demonstrate technical expertise in a competitive environment.',
      photos: [
        { id: 1, src: `${process.env.PUBLIC_URL}/competitions/1.png`, alt: 'BTech ATAST Photo 1' },
        { id: 2, src: `${process.env.PUBLIC_URL}/competitions/2.png`, alt: 'BTech ATAST Photo 2' },
        { id: 3, src: `${process.env.PUBLIC_URL}/competitions/3.png`, alt: 'BTech ATAST Photo 3' },
        { id: 4, src: `${process.env.PUBLIC_URL}/competitions/4.png`, alt: 'BTech ATAST Photo 4' },
        { id: 5, src: `${process.env.PUBLIC_URL}/competitions/5.png`, alt: 'BTech ATAST Photo 5' },
        { id: 6, src: `${process.env.PUBLIC_URL}/competitions/atast.jpg`, alt: 'BTech ATAST Certificate' }
      ]
    },
    {
      id: 'redroom-ctf',
      title: 'Red Room CTF Hackathon',
      description: 'Participated in the Red Room CTF (Capture The Flag) Hackathon, a cybersecurity competition focused on ethical hacking, vulnerability assessment, and security challenges. This event tested skills in penetration testing, cryptography, reverse engineering, and network security. It provided hands-on experience in identifying and exploiting security vulnerabilities in a controlled, educational environment.',
      photos: [
        { id: 1, src: `${process.env.PUBLIC_URL}/redroom/red room.jpg`, alt: 'Red Room CTF Photo 1' },
        { id: 2, src: `${process.env.PUBLIC_URL}/redroom/red1.jpg`, alt: 'Red Room CTF Photo 2' },
        { id: 3, src: `${process.env.PUBLIC_URL}/redroom/red2.jpg`, alt: 'Red Room CTF Photo 3' },
        { id: 4, src: `${process.env.PUBLIC_URL}/redroom/red3.jpg`, alt: 'Red Room CTF Photo 4' },
        { id: 5, src: `${process.env.PUBLIC_URL}/redroom/red4.jpg`, alt: 'Red Room CTF Photo 5' }
      ]
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (competitionId, photosLength) => {
    setCurrentIndices((prev) => {
      const current = prev[competitionId] || 0;
      return {
        ...prev,
        [competitionId]: current === 0 ? photosLength - 1 : current - 1
      };
    });
  };

  const goToNext = (competitionId, photosLength) => {
    setCurrentIndices((prev) => {
      const current = prev[competitionId] || 0;
      return {
        ...prev,
        [competitionId]: current === photosLength - 1 ? 0 : current + 1
      };
    });
  };

  const goToSlide = (competitionId, index) => {
    setCurrentIndices((prev) => ({
      ...prev,
      [competitionId]: index
    }));
  };

  return (
    <section id="competitions" className="competitions-section">
      <div className="competitions-header">
        <div className="competitions-title">
          <span className="comp-icon">
            <FaTrophy />
          </span>
          <h2>{t('competitionsTitle')}</h2>
        </div>
        <p>Showcasing my participation in technical competitions and hackathons</p>
      </div>

      {competitions.map((competition) => {
        const currentIndex = currentIndices[competition.id] || 0;
        const currentPhoto = competition.photos[currentIndex];

        return (
          <div key={competition.id} className="competition-block">
            <div className="competition-info">
              <h3 className="competition-name">{competition.title}</h3>
              <p className="competition-description">{competition.description}</p>
            </div>
            <div className="carousel-container">
              <div className="carousel-wrapper">
                <button 
                  className="carousel-button prev"
                  onClick={() => goToPrevious(competition.id, competition.photos.length)}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <div 
                  className="carousel-slide"
                  onClick={() => openModal(currentPhoto)}
                >
                  <img src={currentPhoto.src} alt={currentPhoto.alt} />
                  <div className="photo-overlay">
                    <span>Click to view full size</span>
                  </div>
                </div>
                <button 
                  className="carousel-button next"
                  onClick={() => goToNext(competition.id, competition.photos.length)}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </div>
              <div className="carousel-indicators">
                {competition.photos.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(competition.id, index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="carousel-counter">
                {currentIndex + 1} / {competition.photos.length}
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Competitions;

