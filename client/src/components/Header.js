import React, { useState, useEffect } from 'react';

const Header = ({ menuOpen, toggleMenu }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/animation.jpg", "/broom.jpg", "/clean-home.jpg", "/cleaner-office.jpg",
    "/cleaning.jpg", "/construction.jpg", "/cleaned-home.jpg", "/grafitti.jpg",
    "/high-pressure-water.jpg", "/home-cleaning-service.jpg", "/inside-phone.jpg",
    "/regular-cleaning.jpg", "/towel-cleaner.jpg", "/vacuum.jpg", "/window.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Create a circular array of images for continuous looping
  const displayImages = [...images, ...images.slice(0, 2)];

  return (
    <header className="header">
      <img src="/cleanhouse.jpg" alt="Clean House" className="landing-image" />
      <h1>Titans Tidy Cleaners</h1>
      <div className="header-description">
        <h2>Cleaning with Care, Quality You Can Trust</h2>
        <p><strong>At Titans Tidy Cleaners, we bring sparkle and shine to your home and office. Our professional team is dedicated to delivering exceptional cleaning services with attention to detail, ensuring a spotless environment every time. Whether it's a one-time deep clean or regular maintenance, we've got you covered!</strong></p>
      </div>
      

      <div className="carousel-container">
        <div 
          className="carousel" 
          style={{ 
            transform: `translateX(-${currentIndex * 320}px)`,
            width: `${displayImages.length * 320}px` // Set width to accommodate all images
          }}
        >
          {displayImages.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${
                index % images.length === currentIndex ? 'active' :
                (index % images.length === (currentIndex - 1 + images.length) % images.length) ? 'prev' :
                (index % images.length === (currentIndex + 1) % images.length) ? 'next' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#quote">Get a Quote</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;