import React, { Component } from 'react';
import './Header.scss';
import Carousel from '../../../../components/Carousel/carousel';

class Header extends Component {
  render () {
    return (
      <div className="topHeaderContainer">
        <div className="headerText">
          Audball Studios builds
        </div>
        <div className="headerText headerSecondText">
          {/* <ul className="content__container__list">
            <li className="content__container__list__item">brands and websites by design.</li>
            <li className="content__container__list__item">logos people remember.</li>
            <li className="content__container__list__item">modern website designs.</li>
            <li className="content__container__list__item">brands people love as much as their owners do.</li>
          </ul> */}
          <Carousel loop auto axis={'y'} interval={5000} className="content__container__list">
            {/* Attributes: https://reactjsexample.com/minimal-carousel-component-for-react/ */}
            <div className="content__container__list__item">brands and websites by design.</div>
            <div className="content__container__list__item">logos people remember.</div>
            <div className="content__container__list__item">modern website designs.</div>
            <div className="content__container__list__item">brands people love as much as their owners do.</div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Header;
