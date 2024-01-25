import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
