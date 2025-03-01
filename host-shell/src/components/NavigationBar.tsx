import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <ul className="list-none flex gap-4">
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/micro-frontend" 
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
        >
          Micro Frontend
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;