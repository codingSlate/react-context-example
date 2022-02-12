import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './style.css';
import Login from './Login';
import Products from './Products';
import UserProfile from './UserProfile';
import ProtectedRoute from './ProtectedRoute';

import AppState from './context/AppState';
import AppContext from './context/AppContext';


export default function App() {
  // const { isAuth } = useContext(AppContext);
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <AppState>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <ProtectedRoute element={<Navigate to="/login"/>}>
              <Route path="/profile" element={<ProtectedRoute />} />
            </ProtectedRoute>
          </Routes>
        </AppState>
      </BrowserRouter>
    </div>
  );
}
