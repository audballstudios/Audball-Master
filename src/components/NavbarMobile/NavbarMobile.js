import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppPaths from '../../AppPaths';

import MobileMenu from './MobileMenu';

import './NavbarMobile.scss';

import logo from '../../img/logo.png';

class NavbarMobile extends Component {
  state = {
    visible: false,
    show: false,
    searchShow: false,
    hamburgerActive: false
  };

  handleToggleMobile = () => {
    this.setState({ show: !this.state.show, hamburgerActive: !this.state.hamburgerActive });
  }

  logoClick = () => {
    this.setState({ show: false, hamburgerActive: false });
  }

  render () {
    const { show, hamburgerActive } = this.state;

    return (
      <div className="navbarMobile__wrapper">
        <div className={hamburgerActive ? 'navbarMobile open' : 'navbarMobile'}>
          <div className="mobilelogo__wrapper">
            <div className={hamburgerActive ? 'hamburger active' : 'hamburger'} onClick={this.handleToggleMobile}>
              <span className="hamburger-line top-line" />
              <span className="hamburger-line middle-line" />
              <span className="hamburger-line bottom-line" />
            </div>
            <div className="logoContainer">
              <Link to={AppPaths.HOMEPAGE} >
                <img src={logo} className="logo" alt="Audball Studios" onClick={this.logoClick} />
              </Link>
            </div>
          </div>
          {show ? <MobileMenu onToggleMobile={this.handleToggleMobile} /> : null}
        </div>
      </div>
    );
  };
};

export default NavbarMobile;
