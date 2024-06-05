import React from 'react';
import '../components/Styles.css';
import { useState } from 'react';


const Haader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
 <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Haader
