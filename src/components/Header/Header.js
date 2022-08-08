import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to={ROUTES.ROOT} className="logo">
          Linker
        </Link>
        <nav>
          <ul className="header__nav">
            <li>
              <Link to={ROUTES.REGISTER}>Register</Link>
            </li>
            <li>
              <Link to={ROUTES.LOGIN}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
