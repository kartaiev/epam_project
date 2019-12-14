import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = ({ classEl }) => {
  return (
    <div className={`nav-bar ${classEl}`}>
      <div className="nav-bar__wrap">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
