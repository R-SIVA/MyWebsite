import React from 'react';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <div className="p-3 bg-opacity-25 bg-white backdrop-blur-lg sticky top-0 z-30" data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
      <div className="container-5 w-container">
        <a href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home"></a>
        <nav role="navigation" className="w-nav-menu">
          <a href="#section-home" className="navigation-item w-nav-link" style={{color:'white', maxWidth: "1040px"}}>Home</a>
          <a href="#section-about" className="navigation-item w-nav-link" style={{maxWidth: "1040px"}}>About</a>
          <a href="#section-skills" className="navigation-item w-nav-link" style={{maxWidth: "1040px"}}>Skills</a>
          <a href="#section-projects" className="navigation-item w-nav-link" style={{maxWidth: "1040px"}}>Projects</a>
          <a href="#section-contact" className="navigation-item w-nav-link" style={{maxWidth: "1040px"}}>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// //import logo from '../assets/icons/logo.svg';
// import React from "react";
// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const handleToggle = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <div className="bg-opacity-25 bg-black backdrop-blur-lg sticky top-0 z-30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="text-2xl font-bold">
            
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link to="/" className="px-3 py-2 text-sm font-medium no-underline	">
//                 Home
//               </Link>
//               <Link to="/about" className="px-3 py-2  text-sm font-medium no-underline">
//                 About
//               </Link>
//               <Link to="/skills" className="px-3 py-2 text-sm font-medium no-underline">
//                 Skills
//               </Link>
//               <Link to="/project" className="px-3 py-2 text-sm font-medium no-underline">
//                 Projects
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       </div>
//   );
// };

// export default Navbar;
