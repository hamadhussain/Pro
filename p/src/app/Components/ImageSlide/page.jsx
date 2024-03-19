'use client'
import { useState, useEffect, useRef } from 'react';

const AutoImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const images = [
    '/ImageSl/2.jpg',
    '/ImageSl/4.jpg',
    '/ImageSl/5.jpg',
  ];
  let interval=3000;
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment currentIndex to show the next image
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div ref={sliderRef} className=" h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
      <style jsx>{`
        .slider {
          position: relative;
          max-width: 100%;
          overflow: hidden;
        }
        img {
          display: none;
          width: 100%;
          height: auto;
        }
        img.active {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default AutoImageSlider;
