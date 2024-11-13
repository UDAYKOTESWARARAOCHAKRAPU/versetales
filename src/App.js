import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/About';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
