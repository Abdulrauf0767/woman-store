import React, { useEffect, useState } from 'react';

const Slider = () => {
  const images = [
    "/Images/woman-img-01.jpg",
    "/Images/woman-img-02.jpg",
    "/Images/woman-img.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative overflow-hidden w-[90%] mx-auto mt-10">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full md:h-[40vw] h-[60vw] object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`md:w-5 md:h-5 w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => handleImages(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
