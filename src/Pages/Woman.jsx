import React from 'react'
import { useEffect } from "react";
import Header from '../Components/Header';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

const Woman = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.list);
  const status = useSelector((state) => state.product.status);
  const category = useSelector((state) => state.product.category);

  useEffect(() => {
    
    dispatch(categoryFetchData('women'));
  }, [dispatch]);

  return (
    <div className='w-[90%] mx-auto'>
      <Header/>
      <div className='w-[90%] mx-auto flex flex-wrap gap-6 md:mt-32 mt-20 justify-center'>
        {items.map((item) => (
          <div key={item.id} className='md:w-[250px] w-[150px] h-[300px] md:h-[400px] bg-[white] border border-gray-200 p-3 shadow-md rounded-xl'>
            <NavLink to={`/carddetails/${item.id}`} className='w-full h-full flex flex-col items-start justify-between'>
              <div className='w-full h-[75%] flex items-center justify-center'>
                <img 
                  src={item.image} 
                  className='max-w-full max-h-full object-cover' 
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = 'path/to/fallback/image.jpg';
                  }}
                />
              </div>  
              <h2 className='w-full h-[8%] md:text-lg text-sm font-title tracking-normal truncate font-[300]'>
                {item.title}
              </h2>
              <p className='w-full h-[10%] text-red-500'>${item.price}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Woman;