import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTES } from '../../constants';
import './header.scss';
import { isLoggedInSelector } from '../../store/user/selectors';
import Button from '../Button';
import { logout } from '../../store/user/actions';

const Header = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    delete localStorage.token;
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to={ROUTES.ROOT} className="logo">
          Linker
        </Link>
        <nav>
          <ul className="header__nav">
            {isLoggedIn ? (
              <li>
                <Button onClick={logoutUser}>Logout</Button>
              </li>
            ) : (
              <>
                <li>
                  <Link to={ROUTES.REGISTER}>Register</Link>
                </li>
                <li>
                  <Link to={ROUTES.LOGIN}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
