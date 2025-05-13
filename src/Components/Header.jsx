import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm,clearSearch } from '../Features/CardDataSlice';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchbar, setIsSearchbar] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const wishlistCount = useSelector((state) => state.cardData.wishlist.length);
  const addtocartCount = useSelector((state) => state.cardData.addtocart.length);
  const searchTerm = useSelector((state) => state.cardData.searchTerm);

  const handleSearchbar = () => {
    setIsSearchbar(!isSearchbar);
    if (isSearchbar) {
      dispatch(clearSearch());
      setLocalSearchTerm('');
    }
  };
  const handleWomen = () => {
    navigate('/woman')
  }
  const handlemen = () => {
    navigate('/man')
  }
  const handlechild = () => {
    navigate('/child')
  }
  const handleBrand = () => {
    navigate('/brands')
  }
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    dispatch(setSearchTerm(value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate('/search-results');
      setIsSearchbar(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto w-[90%]">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
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
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          <nav className="hidden lg:flex lg:items-center lg:space-x-8 lg:w-auto">
            <ul className="flex space-x-8">
             <li onClick={handleWomen} className='font-title font-[250] text-sm uppercase cursor-pointer '>Women</li>
             <li onClick={handlemen} className='font-title font-[250] text-sm uppercase cursor-pointer '>Men</li>
             <li onClick={handlechild} className='font-title font-[250] text-sm uppercase cursor-pointer '>Kids</li>
             <li onClick={handleBrand}  className='font-title font-[250] text-sm uppercase cursor-pointer '>Brands</li>
              
            </ul>
          </nav>

          <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <h1 className="text-2xl font-light tracking-tight">Cloth Center</h1>
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Search"
              onClick={handleSearchbar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>

            <NavLink 
              to={'/login'}
              type="button"
              className="p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </NavLink>

            <div className="relative">
              <NavLink
                to="/wishlist"
                className="p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </NavLink>
              {wishlistCount > 0 && (
                <span className="absolute top-3 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>

            <div className="relative">
              <NavLink
                to="/addtocart"
                className="p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </NavLink>
              {addtocartCount > 0 && (
                <span className="absolute top-3 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {addtocartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {isSearchbar && (
          <form onSubmit={handleSearchSubmit} className="w-[90%] mx-auto h-16 flex items-center relative top-6">
            <div className="w-full h-12 border-2 border-gray-200 rounded-2xl overflow-hidden">
              <input
                type="search"
                name="search"
                id="search"
                className="w-full h-full px-4 outline-none"
                placeholder="Search..."
                value={localSearchTerm}
                onChange={handleSearchChange}
                autoFocus
              />
            </div>
            <button type="submit">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="size-5 absolute top-6 right-3 text-gray-500"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                />
              </svg>
            </button>
          </form>
        )}

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              <li onClick={handleWomen} className='font-title font-[250] text-sm uppercase cursor-pointer '>Women</li>
             <li onClick={handlemen} className='font-title font-[250] text-sm uppercase cursor-pointer '>Men</li>
             <li onClick={handlechild} className='font-title font-[250] text-sm uppercase cursor-pointer '>Kids</li>
             <li onClick={handleBrand}  className='font-title font-[250] text-sm uppercase cursor-pointer '>Brands</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;