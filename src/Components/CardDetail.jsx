import React, { useEffect } from 'react'
import Header from "../Components/Header";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, findProductById } from "../Features/CardDataSlice";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from '../Features/CardDataSlice';
const CardDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    useEffect(() => {
        dispatch(findProductById(Number(id)));
    }, [id, dispatch]);

    if (!selectedProduct) {
        return <p className="text-center">Product not found...</p>;
    }

    const handleWishlist = () => {
        dispatch(addToWishlist(selectedProduct));
    };
    const handleAddtoccart = () => {
        dispatch(addToCart(selectedProduct)) ;
     }
      

    return (
        <div>
            <Header/>
            <div className='w-[80%] mx-auto mt-24 flex flex-col md:flex-row items-start gap-x-32 justify-center'>
                
                <div className='md:w-[50%] w-full flex flex-col'>
                    <div className='w-full h-[500px] shadow-md rounded-xl flex items-center justify-center'>
                        <img 
                            src={selectedProduct.image} 
                            alt={selectedProduct.title}
                            className='max-w-[80%] max-h-[80%] object-contain'
                        />
                    </div>
                    
                    <div className='w-full h-auto mt-4 flex gap-2'>
                    
                    </div>
                </div>

               
                <div className='md:w-[40%] w-full flex flex-col items-start gap-y-5'>
                    <h2 className='text-xl font-title font-medium w-full'>{selectedProduct.title}</h2>
                    <p className='text-red-500'>${selectedProduct.price}</p>
                    <p className='font-title font-[250] text-md text-justify leading-normal'>{selectedProduct.description}</p>
                    <div className='flex flex-col items-start gap-y-5'>
                        <h4 className='text-xl font-title'>Size</h4>
                        <div className='flex items-center gap-x-4 w-full'>
                            <button type="button" className='w-[50px] h-8 border flex items-center justify-center border-gray-300'>XS</button>
                            <button type="button" className='w-[50px] h-8 border flex items-center justify-center border-gray-300'>S</button>
                            <button type="button" className='w-[50px] h-8 border flex items-center justify-center border-gray-300'>M</button>
                            <button type="button" className='w-[50px] h-8 border flex items-center justify-center border-gray-300'>L</button>
                            <button type="button" className='w-[50px] h-8 border flex items-center justify-center border-gray-300'>XL</button>
                        </div>
                        <div className='w-full flex flex-col gap-y-5 mt-6'>
                            <button type="button" className='w-full h-12 bg-[#222124] text-white flex items-center justify-center p-2 rounded-xl' onClick={() => handleWishlist()}>Add To Wishlist</button>
                            <button onClick={() => handleAddtoccart()} type="button" className='w-full h-12 bg-[#222124] text-white flex items-center justify-center p-2 rounded-xl'>Add to Cart</button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail