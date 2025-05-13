import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Features/CardDataSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.cardData);
  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium text-center mb-8 font-title">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-4">Your wishlist is empty</p>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="w-full flex flex-row bg-white shadow-sm border border-gray-100 rounded-md overflow-hidden"
            >
              {/* Image Section */}
              <Link
                to={`/carddetails/${product.id}`}
                className="w-40 min-w-[160px] h-40 flex items-center justify-center shadow-md p-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain"
                />
              </Link>

              {/* Content Section */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <Link to={`/carddetails/${product.id}`}>
                    <h3 className="text-lg font-title font-[280] mb-1 hover:text-blue-600 line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="font-title text-gray-400 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>
                  </Link>
                </div>

                <div className="flex justify-between items-center mt-2 flex-wrap">
                  <span className="font-bold text-lg text-red-400">${product.price}</span>
                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                    <Link
                      to={`/carddetails/${product.id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
