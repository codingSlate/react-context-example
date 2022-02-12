import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Login from './Login';
import Products from './Products';
import UserProfile from './UserProfile';
import AppState from './context/AppState';
import AppContext from './context/AppContext';

export default function App() {
  const { isAuth } = useContext(AppContext);
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/user">Profile</Link>
        <AppState>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/user" element={isAuth ? <UserProfile /> : null} /> */}
            <ProtectedRoute />
          </Routes>
        </AppState>
      </BrowserRouter>
    </div>
  );
}
