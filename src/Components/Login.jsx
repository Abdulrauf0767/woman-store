import React from 'react';
import { NavLink } from 'react-router-dom';
import background from '/Images/woman-img-02.jpg';
import { useFormik } from 'formik';
import {validation} from '../Validations/Validation'
import { useState } from 'react';
const Login = () => {
  const [isText, setisText] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { values, touched, handleChange, handleSubmit, errors, handleBlur, handleReset } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
      setSuccessMessage("Your account created successfully ✅");
      handleReset();
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  });

  const handleLock = () => {
    setisText(prev => !prev);
  };
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
       <div className='w-full min-h-screen flex flex-col items-center justify-center relative px-4 py-10'>
      
      {/* Success Message */}
      {successMessage && (
        <div className="absolute top-5 px-6 py-3 bg-green-500 text-white font-semibold rounded shadow text-sm md:text-base">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className='w-full max-w-5xl bg-white/80 rounded-lg shadow-lg flex flex-col md:flex-row items-stretch p-0 overflow-hidden '>
        {/* Image Container - full height on large screens */}
        <div className='w-full md:w-[45%] min-h-[300px] md:min-h-[600px] flex items-center justify-center  p-2'>
          <img 
            src={'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=600'} 
            alt="Signup" 
            className=' max-w-full h-full object-center object-cover rounded-lg ' 
          />
        </div>

        {/* Form Fields Container */}
        <div className='w-full md:w-[55%] flex flex-col gap-4 p-6 md:p-8'>
          <h1 className='font-bold text-2xl text-center'>Login</h1>

          {/* Email */}
          <div className='flex flex-col gap-y-1 relative'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Email'
              className='w-full border border-black h-10 rounded-md p-2'
              value={values.email} 
              onChange={handleChange} 
              onBlur={handleBlur} 
            />
            {errors.email && touched.email && <p className='text-red-500 text-sm absolute -bottom-5'>{errors.email}</p>}
          </div>

          {/* Password */}
          <div className='flex flex-col gap-y-1 relative'>
            <label htmlFor="password">Password</label>
            <div className='relative'>
              <input 
                type={isText ? 'text' : 'password'} 
                name="password" 
                id="password" 
                placeholder='Password'
                className='w-full border border-black h-10 rounded-md p-2 pr-8'
                value={values.password} 
                onChange={handleChange} 
                onBlur={handleBlur} 
              />
              <button 
                type="button" 
                onClick={handleLock} 
                className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75M6.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </button>
            </div>
            {errors.password && touched.password && <p className='text-red-500 text-xs absolute -bottom-5'>{errors.password}</p>}
          </div>

          <p>Do not have an account ? <NavLink to={'/signup'} className={'text-gray-800'} >Create Account</NavLink></p>
          {/* Submit Button */}
          <div className='flex justify-center pt-4'>
            <button type="submit" className='w-full md:w-[150px] h-12 bg-[#346ca1] text-white rounded-3xl hover:bg-[#2a5888] transition-colors'>
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
     
    </div>
  );
};

export default Login;
