import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavMenu.css';

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-menu">
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        &#9776;
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <button className="nav-button" onClick={() => { navigate('/vista1'); setIsOpen(false); }}>
          Vista 1
        </button>
        <button className="nav-button" onClick={() => { navigate('/vista2'); setIsOpen(false); }}>
          Vista 2
        </button>
      </div>
    </nav>
  );
};

export default NavMenu;
