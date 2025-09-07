import { useState } from 'react';
import { FaQuestionCircle, FaGlobe, FaUser } from 'react-icons/fa';
import './Navbar.scss';
import logo from '../../assets/logo.png'; // Make sure this path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
  <img src={logo} alt="Astro Logo" />
</div>


        <nav className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#models">Models</a>
          <a href="#sustainability">Sustainability</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navbar__icons">
          <FaQuestionCircle className="icon" />
          <FaGlobe className="icon" />
          <FaUser className="icon" />
        </div>
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;

