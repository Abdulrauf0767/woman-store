import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryData, dataFetch } from '../Features/CardDataSlice';
import CardComponent from './CardComponent';

const Cards = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cardData.list);
  const jsonData = useSelector((state) => state.cardData.categoryList?.productList || []);
  const status = useSelector((state) => state.cardData.status);
  const error = useSelector((state) => state.cardData.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(dataFetch());
      dispatch(categoryData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p className="text-center">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if ((!products || !Array.isArray(products)) && (!jsonData || !Array.isArray(jsonData))) {
    return <p className="text-center">No products found</p>;
  }

  return (
    <>
      <div className='w-[90%] mx-auto flex flex-wrap gap-6 md:mt-32 mt-20 justify-center'>
        {products.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
        {jsonData.map((item) => (
          <CardComponent key={item.id} item={item} />
        ))}
      </div>
      <hr className='w-[90%] mx-auto mt-20 ' />
    </>
  );
};

export default Cards;