import React from 'react';
import { NavLink } from 'react-router-dom';

const fallbackImage = 'path-to-your-fallback-image.jpg';

const CardComponent = ({ product, item }) => {
  const data = product || item;
  if (!data) return null;

  return (
    <div className="group relative w-[150px] md:w-[250px] bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <NavLink
        to={`/carddetails/${data.id}`}
        state={{ productData: data }}
        className="flex flex-col h-full"
      >
        {/* Image */}
        <div className="w-full aspect-[4/3] overflow-hidden rounded-xl flex items-center justify-center bg-gray-50">
          <img
            src={data.image && data.image.trim() !== '' ? data.image : fallbackImage}
            alt={data.title || 'Product image'}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
          />
        </div>

        {/* Title and Rating */}
        <div className="mt-4 flex flex-col gap-1">
          <h3 className="text-sm md:text-base font-semibold text-gray-800 truncate">
            {data.title}
          </h3>

          <div className="flex items-center gap-[2px]">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 
                  0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 
                  00-.364 1.118l1.07 3.292c.3.921-.755 
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 
                  00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                  1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                  1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mt-2 text-right">
          <p className="text-sm md:text-base font-bold text-gray-900">${data.price}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default CardComponent;
