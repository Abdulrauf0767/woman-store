import React, { useEffect, useState, useRef } from 'react';
import Header from "../Components/Header";
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, findProductById, addToWishlist } from "../Features/CardDataSlice";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const CardDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isZoomVisible, setIsZoomVisible] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const zoomImgRef = useRef(null);

    const selectedProduct = useSelector((state) => state.cardData.selectedProduct);
    const products = useSelector((state) => state.cardData.list);
    const jsonProducts = useSelector((state) => state.cardData.categoryList?.productList || []);
    
    const productFromState = location.state?.productData;

    const product = selectedProduct || productFromState || 
                   products.find(p => p.id.toString() === id) || 
                   jsonProducts.find(item => item.id.toString() === id);

    useEffect(() => {
        if (!productFromState && !selectedProduct) {
            dispatch(findProductById(Number(id)));
        }
    }, [id, dispatch, productFromState, selectedProduct]);

    if (!product) {
        return (
            <div>
                <Header />
                <div className="w-[80%] mx-auto mt-24 text-center">
                    <p>Product not found...</p>
                    <button 
                        onClick={() => navigate(-1)} 
                        className="mt-4 px-4 py-2 bg-[#222124] text-white rounded"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    const handleWishlist = () => {
        dispatch(addToWishlist(product));
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleMouseMove = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - bounds.left) / bounds.width) * 100;
        const y = ((e.clientY - bounds.top) / bounds.height) * 100;
        setZoomPosition({ x, y });

        if (zoomImgRef.current) {
            gsap.to(zoomImgRef.current, {
                backgroundPosition: `${x}% ${y}%`,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    return (
        <div>
            <Header />
            <div className='w-[80%] mx-auto mt-24 flex flex-col md:flex-row items-start gap-x-32 justify-center'>
                
                <div className='md:w-[50%] w-full flex flex-col'>
                    <div
                        className='w-full h-[500px] shadow-md rounded-xl flex items-center justify-center bg-white relative overflow-hidden'
                        onMouseEnter={() => setIsZoomVisible(true)}
                        onMouseLeave={() => setIsZoomVisible(false)}
                        onMouseMove={handleMouseMove}
                    >
                        <img 
                            src={product.image || '/placeholder-image.jpg'} 
                            alt={product.title}
                            className='max-w-[100%] max-h-[100%] object-contain z-10'
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/placeholder-image.jpg';
                            }}
                        />
                    </div>
                </div>

                <div className='md:w-[40%] w-full flex flex-col items-start gap-y-5'>
                    <h2 className='text-xl font-title font-medium w-full'>{product.title}</h2>
                    {product.brand && (
                        <h3 className='font-title font-medium w-full flex items-center gap-x-5 text-sm text-black'>
                            Brand: <p className='text-[#d72a25] font-title'>{product.brand}</p>
                        </h3>
                    )}
                    <p className='text-red-500'>${product.price}</p>
                    <p className='font-title font-[250] text-md text-justify leading-normal'>
                        {product.description || 'No description available'}
                    </p>

                    <div className='flex flex-col items-start gap-y-5'>
                        <h4 className='text-xl font-title'>Size</h4>
                        <div className='flex items-center gap-x-4 w-full'>
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <button 
                                    key={size}
                                    type="button" 
                                    className='w-[50px] h-8 border flex items-center justify-center border-gray-300 hover:border-black transition-colors'
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <div className='w-full flex flex-col gap-y-5 mt-6'>
                            <button 
                                type="button" 
                                className='w-full h-12 bg-[#222124] text-white flex items-center justify-center p-2 rounded-xl hover:bg-gray-800 transition-colors'
                                onClick={handleWishlist}
                            >
                                Add To Wishlist
                            </button>
                            <button 
                                type="button" 
                                className='w-full h-12 bg-[#222124] text-white flex items-center justify-center p-2 rounded-xl hover:bg-gray-800 transition-colors'
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

          
            {isZoomVisible && (
                <div className='md:w-[40%] w-[50%] mx-auto top-[10%] right-[5%] absolute bg-white md:top-[23%] md:right-[6%] h-[200px] md:h-[500px] rounded-lg border shadow-lg overflow-hidden z-50'>
                    <div
                        ref={zoomImgRef}
                        className='w-full h-full'
                        style={{
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: '200%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CardDetail;
