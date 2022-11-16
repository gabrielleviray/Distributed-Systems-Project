import React from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'
import AddRecipe from './components/pages/AddRecipe'

function App() {
  return (
    // Grab components using BrowserRouter and Implement routing
    < BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Routes>
    </BrowserRouter> 
    
  );
}

export default App;
