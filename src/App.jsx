import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CardDetail from './Components/CardDetail';
import Wishlist from './Components/Wishlist';
import AddToCart from './Components/AddToCart';
import Login from './Components/Login';
import Signup from './Components/Signup';
import SearchResults from './Components/SearchResults';
import Woman from './Pages/Woman';
import Man from './Pages/Man';
import Child from './Pages/Child';
import Brands from './Pages/Brands';
import Admin from './Pages/Admin';
import ShopOwner from './Pages/ShopOwner';
import Otp from './Components/Otp';
import DeliveryInformation from './Pages/DeliveryInformation';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carddetails/:id" element={<CardDetail />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/addtocart" element={<AddToCart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/woman" element={<Woman />} />
      <Route path="/man" element={<Man />} />
      <Route path="/child" element={<Child />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/delivery" element={<DeliveryInformation />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shopowner"
        element={
          <ProtectedRoute allowedRole="shopowner">
            <ShopOwner />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
