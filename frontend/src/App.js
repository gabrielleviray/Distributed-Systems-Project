import React from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Profile from './components/pages/Profile'

function App() {
  return (
    // Grab components using BrowserRouter and Implement routing
    < BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter> 
    
  );
}

export default App;
