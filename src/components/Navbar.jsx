import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo" onClick={scrollToTop}>
          <i className="fa-solid fa-laptop-code"></i>
        </Link>
        <div 
          className={`navbar__toggle ${isMenuOpen ? 'is-active' : ''}`} 
          id="mobile-menu" 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link to="/projects" className="navbar__links" onClick={scrollToTop}>
              Projects
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__links" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/resume" className="navbar__links" onClick={scrollToTop}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;