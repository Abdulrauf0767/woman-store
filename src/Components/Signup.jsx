import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import background from '/Images/woman-img-02.jpg';
import { validation } from '../Validations/Validation';
import { useFormik } from "formik";
import { Eye, EyeOff } from 'lucide-react'; 
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const {
    values,
    touched,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    handleReset
  } = useFormik({
    initialValues: {
      f_name: '',
      l_name: '',
      email: '',
      password: '',
      c_password: ''
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
      handleReset();
      navigate('/otp')
     
    }
  });

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
    
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm z-0" />

      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">SIGN UP</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label htmlFor="f_name" className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              id="f_name"
              name="f_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a username"
              value={values.f_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.f_name && touched.f_name && (
              <p className="text-red-500 text-sm mt-1">{errors.f_name}</p>
            )}
          </div>
          <div>
            <label htmlFor="l_name" className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              id="l_name"
              name="l_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
              value={values.l_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.l_name && touched.l_name && (
              <p className="text-red-500 text-sm mt-1">{errors.l_name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Create a password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="c_password" className="block text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="c_password"
                name="c_password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Confirm your password"
                value={values.c_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.c_password && touched.c_password && (
              <p className="text-red-500 text-sm mt-1">{errors.c_password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect to Login */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <NavLink to="/login" className="text-blue-600 hover:text-blue-800">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
