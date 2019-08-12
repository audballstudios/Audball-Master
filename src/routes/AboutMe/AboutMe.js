import React, { Component } from 'react';
import DetailSection from './components/DetailSection/DetailSection';
import AboutConfig from './AboutConfig';
import CallToAction from '../../components/CallToAction/CallToAction';

import audrey from '../../img/audrey.png';
import signature from '../../img/signature-dark.png';
import arrow from '../../img/down-arrow.png';

import './AboutMe.scss';

class AboutMe extends Component {
  render () {
    return (
      <div className="section_aboutme">
        <div className="aboutme__topSection">
          <div className="aboutme__topSection__intro">
            Hi, I’m Audrey. <br />
            I’m a lover of dogs, lemon cake and all things design.
          </div>
          <div className="aboutme__topSection__pic">
            <img src={audrey} alt="audrey" className="aboutme__topSection__pic__img" />
            <img src={signature} alt="signature" className="aboutme__topSection__pic__signature" />
          </div>
          <img src={arrow} className="aboutme__downArrow" />
        </div>
        <div className="aboutme__bottomSection">
          {AboutConfig.map((item, key) => (
            <DetailSection item={item} key={key} />
          ))}
        </div>
        <CallToAction />
      </div>
    );
  }
}

export default AboutMe;