import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppPaths from '../../AppPaths';
import { HashLink as Link } from 'react-router-hash-link';

class MobileMenu extends Component {
  render () {
    const scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset;
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: 'smooth'
      });
    };

    return (
      <div className="mobileMenu__wrapper">
        <ul className="mobileMenu__link__wrapper">
          <li className="mobileMenu__link__item">
            <Link
              to="/#capabilities"
              scroll={el => scrollWithOffset(el, 47)}
              className="mobileMenu__link"
              onClick={this.props.onToggleMobile}>
              Capabilities
            </Link>
          </li>
          <li className="mobileMenu__link__item">
            <Link to="/#projects"
              scroll={el => scrollWithOffset(el, 47)}
              className="mobileMenu__link"
              onClick={this.props.onToggleMobile}>
              Projects
            </Link>
          </li>
          <li className="mobileMenu__link__item">
            <Link to="/#reviews"
              scroll={el => scrollWithOffset(el, 47)}
              className="mobileMenu__link"
              onClick={this.props.onToggleMobile}>
              Reviews
            </Link>
          </li>
          <li className="mobileMenu__link__item">
            <Link to={AppPaths.ABOUT_PATH}
              className="mobileMenu__link"
              onClick={this.props.onToggleMobile}>
              About me
            </Link>
          </li>
          <li className="mobileMenu__link__item">
            <Link
              to={AppPaths.WORK_WITH_ME_PATH}
              className="mobileMenu__link"
              onClick={this.props.onToggleMobile}>
              Work with me
            </Link>
          </li>
        </ul>
      </div>
    );
  };
};

MobileMenu.propTypes = {
  onToggleMobile: PropTypes.func.isRequired
};

export default MobileMenu;
