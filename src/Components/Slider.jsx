import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const Slider = () => {
  const images = [
    "/Images/woman-img-01.jpg",
    "/Images/woman-img-02.jpg",
    "/Images/woman-img.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImages = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-[90%] mx-auto mt-10 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="relative md:h-[40vw] h-[60vw]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-x-3 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleImages(index)}
            className={`md:w-5 md:h-5 w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'bg-green-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
