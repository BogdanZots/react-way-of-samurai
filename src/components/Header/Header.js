import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    return (
      <header className="header">
        <img
          alt="logo"
          src="https://seeklogo.com/images/C/company-name-logo-C74A7D6F5A-seeklogo.com.png"
        />
        <div className={s.loginBLock}>
          <NavLink to="/login">
          Login
          </NavLink>
        </div>
      </header>
    );
}

export default Header;
