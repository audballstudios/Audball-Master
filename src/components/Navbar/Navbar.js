import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppPaths from '../../AppPaths';
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar.scss';

import NavbarMobile from '../NavbarMobile/NavbarMobile';

import logo from '../../img/logo.png';

class Navbar extends Component {
  state = {
    visible: false,
    show: false,
    searchShow: false,
    hamburgerActive: false
  };
  handleToggleMobile = () => this.setState((prevState) => ({ show: !prevState.show, hamburgerActive: !prevState.hamburgerActive }));

  render () {
    const { activeclassname, isMobile } = this.props;
    const { show, hamburgerActive } = this.state;

    const scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset;
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: 'smooth'
      });
    };

    if (isMobile) {
      return (<NavbarMobile onToggleMobile={this.handleToggleMobile} hamburgerActive={hamburgerActive} show={show} />);
    }
    return (
      <div className="navbar__wrapper">
        <div className={`navbar ${activeclassname}`}>
          <div className="navbarLinkLeft">
            <ul className="navbarLinkWrapper">
              <li className="navbarLinkItem">
                <Link to="/#projects"
                  scroll={el => scrollWithOffset(el, 83)}
                  className="navbarLink">
                    Projects
                </Link>
              </li>
              <li className="navbarLinkItem">
                <Link
                  to="/#capabilities"
                  scroll={el => scrollWithOffset(el, 83)}
                  className="navbarLink">
                    Capabilities
                </Link>
              </li>
              <li className="navbarLinkItem">
                <Link to="/#reviews"
                  scroll={el => scrollWithOffset(el, 83)}
                  className="navbarLink">
                    Reviews
                </Link>
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
                <Link to="/#aboutMe"
                  scroll={el => scrollWithOffset(el, 83)}
                  className="navbarLink">
                    About me
                </Link>
              </li>
              <li className="navbarbtnItem">
                <Link to={AppPaths.WORK_WITH_ME_PATH}
                  className="navbarbtn">Let’s chat!</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

Navbar.propTypes = {
  activeclassname: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default Navbar;
