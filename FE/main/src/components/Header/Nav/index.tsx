import React from 'react';
import { NavLink  } from 'react-router-dom';

import styles from '../Header.module.scss';

const Nav = () => {
  return (
    <nav className={styles.header__menu}>
      <ul>
        <li className="active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        </li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
