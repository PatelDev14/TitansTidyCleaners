import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/animation.jpg",
    "/broom.jpg",
    "/clean-home.jpg",
    // Add other image paths...
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ width: `${100 / images.length}%`, transition: 'transform 0.5s ease-in-out' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;