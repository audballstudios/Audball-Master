import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render () {
    return (
      <div className="topHeaderContainer">
        <div className="headerText">
          Audball Studios builds
        </div>
        <div className="headerText headerSecondText">          
          <ul className="content__container__list">
            <li className="content__container__list__item">brands and websites by design.</li>
            <li className="content__container__list__item">modern website designs.</li>
            <li className="content__container__list__item">digital products that scale.</li>
            <li className="content__container__list__item">brands people love as much as their owners do.</li>
            <li className="content__container__list__item">logos people remember.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
