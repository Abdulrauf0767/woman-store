import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import bg from '/Images/woman-img-02.jpg';
import { DummyUser } from '../../public/DummyUser';
import { useDispatch } from 'react-redux';
import { login } from '../Features/AuthSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = DummyUser.find(
      (u) => u.username === username && u.password === password
    );

    if (matchedUser) {
      dispatch(login(matchedUser));
      navigate(`/${matchedUser.role}`);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm z-0" />
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <NavLink to="/signup" className="text-blue-600 hover:text-blue-800">
              Sign Up
            </NavLink>
          </p>
        </div>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
