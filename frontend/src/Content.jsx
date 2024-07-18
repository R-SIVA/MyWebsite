import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from './pages/Skills';
import About from './pages/About';

const Content = () => {
  return (
    <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills/>} />
    </Routes>
  );
};

export default Content;
