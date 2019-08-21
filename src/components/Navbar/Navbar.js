import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppPaths from '../../AppPaths';
import './Navbar.scss';

import logo from '../../img/logo.png';

const Navbar = ({ activeclassname }) => {
  return (
    <div className="navbar__wrapper">
      <div className={`navbar ${activeclassname}`}>
        <div className="navbarLinkLeft">
          <ul className="navbarLinkWrapper">
            <li className="navbarLinkItem">
              <Link to="#" className="navbarLink">Projects</Link>
            </li>
            <li className="navbarLinkItem">
              <Link to="#" className="navbarLink">Capabilities</Link>
            </li>
            <li className="navbarLinkItem">
              <Link to="#" className="navbarLink">Reviews</Link>
            </li>
          </ul>
        </div>

        <div className="logoContainer">
          <Link to={AppPaths.HOMEPAGE} >
            <img src={logo} className="logo" alt="Audball Studios" />
          </Link>
        </div>

        <div className="navbarLinkRight">
          <ul className="navbarLinkWrapper">
            <li className="navbarLinkItem">
              <Link to={AppPaths.ABOUT_PATH} className="navbarLink">About me</Link>
            </li>
            <li className="navbarbtnItem">
              <Link to={AppPaths.WORK_WITH_ME_PATH} className="navbarbtn">Let’s chat!</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  activeclassname: PropTypes.string.isRequired
};

export default Navbar;
