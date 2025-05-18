import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, clearSearch } from '../Features/CardDataSlice';
import { motion } from 'framer-motion';

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

  const handleWomen = () => navigate('/woman');
  const handlemen = () => navigate('/man');
  const handlechild = () => navigate('/child');
  const handleBrand = () => navigate('/brands');

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

  const navItems = [
    { label: 'Women', action: handleWomen },
    { label: 'Men', action: handlemen },
    { label: 'Kids', action: handlechild },
    { label: 'Brands', action: handleBrand },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto w-[90%]">
        <div className="flex items-center justify-between">
          <motion.button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none relative overflow-hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            whileHover="hover"
            initial="rest"
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full scale-0"
              variants={{
                rest: { scale: 0, y: 50 },
                hover: { scale: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </motion.button>

          <nav className="hidden lg:flex lg:items-center lg:space-x-8 lg:w-auto">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  onClick={item.action}
                  className="relative font-title font-[250] text-sm uppercase cursor-pointer text-gray-700"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <motion.span
                    variants={{
                      rest: { color: '#374151' },
                      hover: { color: '#f3aa4e' },
                    }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1.5px] bg-black"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: '100%' },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <NavLink to={'/'}>
              <motion.h1
                transition={{ duration: 0.3 }}
                whileHover={{
                  color: '#f3aa4e',
                }}
                className='text-2xl font-light tracking-tight cursor-pointer'
              >
                Cloth Center
              </motion.h1>
            </NavLink>
          </div>

          <div className="flex items-center space-x-1">
            <motion.button
              type="button"
              className="p-2 relative overflow-hidden text-gray-700 transition-colors"
              aria-label="Search"
              onClick={handleSearchbar}
              whileHover="hover"
              initial="rest"
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full scale-0"
                variants={{
                  rest: { scale: 0, y: 50 },
                  hover: { scale: 1, y: 0 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 relative z-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </motion.button>

            <motion.div
              className="relative"
              whileHover="hover"
              initial="rest"
            >
              <NavLink to={'/login'} className="p-2 relative overflow-hidden text-gray-700 transition-colors" aria-label="Account">
                <motion.span 
                  className="absolute h-7 w-7 inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full scale-0"
                  variants={{
                    rest: { scale: 0, y: 0 },
                    hover: { scale: 1, y: 27 , x : -5 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </NavLink>
            </motion.div>

            <motion.div 
              className="relative"
              whileHover="hover"
              initial="rest"
            >
              <NavLink to="/wishlist" className="p-2 relative overflow-hidden text-gray-700 transition-colors" aria-label="Wishlist">
                <motion.span 
                  className="absolute h-7 w-7 inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full scale-0"
                  variants={{
                   rest: { scale: 0, y: 0 },
                    hover: { scale: 1, y: 27 , x : -5 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute top-3 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full z-20">
                    {wishlistCount}
                  </span>
                )}
              </NavLink>
            </motion.div>

            <motion.div 
              className="relative"
              whileHover="hover"
              initial="rest"
            >
              <NavLink to="/addtocart" className="p-2 relative overflow-hidden text-gray-700 transition-colors" aria-label="Cart">
                <motion.span 
                  className="absolute h-7 w-7  inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full scale-0"
                  variants={{
                    rest: { scale: 0, y: -100 },
                    hover: { scale: 1, y: 27 , x : -5 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                {addtocartCount > 0 && (
                  <span className="absolute top-3 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full z-20">
                    {addtocartCount}
                  </span>
                )}
              </NavLink>
            </motion.div>
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
              {navItems.map((item, i) => (
                <li key={i} onClick={item.action} className="font-title font-[250] text-sm uppercase cursor-pointer">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <hr className="w-[90%] mx-auto" />
    </header>
  );
};

export default Header;