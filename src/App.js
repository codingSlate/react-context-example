import React, { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Products from './Products';
import UserProfile from './UserProfile';
import AppState from './context/AppState';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/user">Profile</Link>
          <AppState>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/user" element={<UserProfile />} />
        </Routes>
          </AppState>
      </BrowserRouter>
    </div>
  );
}
