import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';

const ProtectedRoute = () =>{
    return(
    <Routes>
      <Route path="/profile" elemene={<UserProfile/>}/>
    </Routes>
    )
}
export default ProtectedRoute