import React, { useEffect } from 'react';
import Header from "../Components/Header";
import { useSelector, useDispatch } from "react-redux";
import { categoryData } from '../Features/CardDataSlice';
import CardComponent from '../Components/CardComponent';

const Brands = () => {
  const dataProduct = useSelector((state) => state.cardData.categoryList.productList || []);
  const status = useSelector((state) => state.cardData.categoryList.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(categoryData());
    }
  }, [dispatch, status]);

  if (status === 'idle' || status === 'pending') {
    return (
      <div className='w-[90%] mx-auto'>
        <Header />
        <div className="w-full text-center py-10">
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (status === 'rejected') {
    return (
      <div className='w-[90%] mx-auto'>
        <Header />
        <div className="w-full text-center py-10 text-red-500">
          Error loading products. Please try again later.
        </div>
      </div>
    );
  }


  return (
    <div className='w-[90%] mx-auto'>
      <Header />
      <div className='flex flex-wrap gap-6 md:mt-32 mt-20 justify-center'>
        {dataProduct.length > 0 ? (
          dataProduct.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 mt-10">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Brands;
