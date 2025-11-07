import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaCertificate, FaEnvelope, FaLaptopCode } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className='navbar'>
      <div className='navbar_container'>
        {/* Logo with Icon */}
        <div className='navbar_logo'>
            Zubenathi Samkile <FaLaptopCode className="logo_icon" />
        </div>

        <ul className={`navbar_menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home <FaHome className="nav_icon" /></a></li>
          <li><a href="#about" onClick={handleLinkClick}>About <FaUser className="nav_icon" /></a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects <FaProjectDiagram className="nav_icon" /></a></li>
          <li><a href="#certificates" onClick={handleLinkClick}>Certificates <FaCertificate className="nav_icon" /></a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact <FaEnvelope className="nav_icon" /></a></li>
        </ul>

        <div className='navbar_toggle' onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
