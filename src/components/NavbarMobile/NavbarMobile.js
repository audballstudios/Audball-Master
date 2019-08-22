import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppPaths from '../../AppPaths';

import MobileMenu from './MobileMenu';

import './NavbarMobile.scss';

import logo from '../../img/logo.png';

const NavbarMobile = ({ onToggleMobile, hamburgerActive, show }) => {
  return (
    <div className="navbarMobile__wrapper">
      <div className="navbarMobile">
        <div className={hamburgerActive ? 'hamburger active' : 'hamburger'} onClick={onToggleMobile}>
          <span className="hamburger-line top-line" />
          <span className="hamburger-line middle-line" />
          <span className="hamburger-line bottom-line" />
        </div>
        <div className="logoContainer">
          <Link to={AppPaths.HOMEPAGE} >
            <img src={logo} className="logo" alt="Audball Studios" />
          </Link>
        </div>
      </div>
      { show ? <MobileMenu /> : null }
    </div>
  );
};

NavbarMobile.propTypes = {
  onToggleMobile: PropTypes.func.isRequired,
  hamburgerActive: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired
};

export default NavbarMobile;
