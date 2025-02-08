import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import CatStories from './Pages/CatStories';
import Story from './Pages/Story';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/cat-stories' element={ <CatStories/> } />
          <Route path='/story' element={ <Story/> } />
        </Routes>
    </Router>
    </>
  );
}

export default App;
