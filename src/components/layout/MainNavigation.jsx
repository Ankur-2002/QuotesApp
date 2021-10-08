import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './MainNavigation.module.css';
const MainNavigation = () => {
  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>Logo</div>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={Classes.active} to="/quotes">
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={Classes.active} to="/new-quote">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
