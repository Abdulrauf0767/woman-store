import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { filteredList, searchTerm } = useSelector((state) => state.product);

  return (
    <div className="container mx-auto w-[90%]">
      <h1 className="text-2xl font-title mt-6 text-center">
        Search Results for: "{searchTerm}"
      </h1>
      
      {filteredList.length === 0 ? (
        <p className="text-center py-8">No products found matching your search.</p>
      ) : (
        <div className="flex flex-col gap-6 py-6">
          {filteredList.map((product) => (
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

export default SearchResults;