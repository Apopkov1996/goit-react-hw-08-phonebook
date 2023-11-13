import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import navcss from './navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectName } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';

export const Navbar = () => {
  const name = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutThunk());
    navigate('/');
  };
  return (
    <div className={navcss.wrapper_nav}>
      <nav className={navcss.nav_menu}>
        <div className={navcss.div}>
          <NavLink to="/" className={navcss.link}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={navcss.link}>
              Contacts
            </NavLink>
          )}
        </div>

        {!isLoggedIn ? (
          <div className={navcss.div}>
            <NavLink to="/login" className={navcss.link}>
              Login
            </NavLink>
            <NavLink to="/register" className={navcss.link}>
              Register
            </NavLink>
          </div>
        ) : (
          <div className={navcss.div}>
            <span>{name}</span>
            <button onClick={logOut}>Exit</button>
          </div>
        )}
      </nav>
    </div>
  );
};
