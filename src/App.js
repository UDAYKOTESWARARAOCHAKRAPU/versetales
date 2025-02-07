import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import CatStories from './Pages/CatStories';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/cat-stories' element={ <CatStories/> } />
        </Routes>
    </Router>
    </>
  );
}

export default App;
