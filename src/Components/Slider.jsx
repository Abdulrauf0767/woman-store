import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const Slider = () => {
  const navigate = useNavigate();

  const images = [
    { img: '/Images/woman-img-01.jpg', path: '/woman' },
    { img: '/Images/woman-img-02.jpg', path: '/woman' },
    { img: '/Images/woman-img.jpg', path: '/brandscd' },
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

  const handleImages = (index) => {z
    setCurrentIndex(index);
  };

  const handleClick = () => {
    navigate(images[currentIndex].path);
  };

  return (
    <div className="relative overflow-hidden w-[90%] mx-auto mt-10">
      <div onClick={handleClick} className="cursor-pointer">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {images.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`slide-${index}`}
              className="w-full md:h-[40vw] h-[60vw] object-cover flex-shrink-0"
            />
          ))}
        </motion.div>
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
