import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/statistic">Статистика</NavLink>
          </li>
          <li>
            <NavLink to="/about">О проекте</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
