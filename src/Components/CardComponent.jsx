import React from 'react';
import { NavLink } from "react-router-dom";
const CardComponent = ({ product }) => {
  if (!product) return null;

  return (
    <div className='md:w-[250px] w-[150px] h-[300px] md:h-[400px] bg-[white] border border-gray-200 p-3 shadow-md rounded-xl'>
      <NavLink to={`/carddetails/${product.id}`} className='w-full h-full flex flex-col items-start justify-between'>
        <div className='w-full h-[75%] flex items-center justify-center'>
          <img 
            src={product.image && product.image.trim() !== '' ? product.image : fallbackImage}
            className='max-w-full max-h-full object-contain rounded-xl' 
            alt={product.title || 'Product image'}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = fallbackImage;
            }}
          />
        </div>  
        <h2 className='w-full h-[8%] md:text-lg text-sm font-title tracking-normal truncate font-[300]'>
          {product.title}
        </h2>
        <p className='w-full h-[10%] text-red-500'>${product.price}</p>
      </NavLink>
    </div>
  );
};

export default CardComponent;