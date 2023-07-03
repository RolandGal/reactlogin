import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Top25Link } from './Top25Link';
import { FilterGenders } from './FilterGender';
import { Inicio } from './Inicio';
import './Menu.css';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <div className='menu-toggle' onClick={handleMenuToggle}>
        <span className={`toggle-icon ${isMenuOpen ? 'open' : ''}`}></span>
      </div>
      <ul className='nav'>
        <li className='nav-item'>
          <Inicio />
        </li>
        <li className='nav-item'>
          <Top25Link />
        </li>
        <li id="filtro" className='nav-item'>
          <FilterGenders />
        </li>
        <li className='nav-item'>
          <Link to={'/favorites'} className='nav-link'>Favorites</Link>
        </li>
        <li className='nav-item'>
          <Link to={'/SobreNosotros'} className='nav-link'>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
