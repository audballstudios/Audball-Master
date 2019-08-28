import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppPaths from '../../../../AppPaths';

import './Header.scss';
import Carousel from '../../../../components/Carousel/carousel';

class Header extends Component {
  render () {
    const { isMobile } = this.props;

    return (
      <div className="topHeaderContainer">
        <div className="headerText">
          Audball Studios builds
        </div>
        <div className="headerText headerSecondText">
          <Carousel loop auto axis={'y'} interval={2000} className="content__container__list">
            {/* Attributes: https://reactjsexample.com/minimal-carousel-component-for-react/ */}
            <div className="content__container__list__item">brands and websites by design.</div>
            <div className="content__container__list__item">logos people remember.</div>
            <div className="content__container__list__item">modern website designs.</div>
            <div className="content__container__list__item">brands people love as much as their owners do.</div>
          </Carousel>
        </div>
        { isMobile && <Link to={AppPaths.WORK_WITH_ME_PATH} className="topHeader__chatBtn">Let’s chat!</Link> }
      </div>
    );
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Header;
