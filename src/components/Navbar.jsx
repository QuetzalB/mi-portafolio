import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna el estado entre abierto y cerrado
  };

  return (
    <nav className={`navbar ${isOpen ? 'expanded' : ''}`}>
      {/* Ícono hamburguesa o X */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Enlaces de navegación */}
      {isOpen && (
        <ul className="nav-links">
          <li>
            <a href="#home"><FaHome /> Home</a>
          </li>
          <li>
            <a href="#about"><FaUser /> Acerca de mí</a>
          </li>
          <li>
            <a href="#contact"><FaEnvelope /> Contacto</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
