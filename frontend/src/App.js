import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
//import Content from "./Content";
import Navbar from "./components/Navbar";
//import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Project';

const App = () => {
  return (
    <div className="App">
    <Router>
       
      <div  style={{ display: "flex", flexDirection: "column",minWidth:"100vh" }}>
        <Navbar />
        <div style={{ flex: "1", minHeight: "100vh",}}>
          {/* <Content /> */}
          
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>

        </div>
      </div>
    </Router>
    </div>
  );
};

export default App;
