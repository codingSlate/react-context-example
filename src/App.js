import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Login from './Login';
import Products from './Products';
import UserProfile from './UserProfile';
import ProtectedRoute from './ProtectedRoute';

import AppState from './context/AppState';
import AppContext from './context/AppContext';


export default function App() {

  return (
    <div>
      <BrowserRouter>
        <AppState>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/profile" element={<UserProfile />} />
            </Route>

          </Routes>
        </AppState>
      </BrowserRouter>
    </div>
  );
}
