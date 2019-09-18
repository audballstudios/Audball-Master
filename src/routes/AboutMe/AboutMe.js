import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppPaths from '../../AppPaths';
import DetailSection from './components/DetailSection/DetailSection';
import AboutConfig from './AboutConfig';
import CallToAction from '../../components/CallToAction/CallToAction';

import audrey from '../../img/audrey-about.png';
import signature from '../../img/signature-dark.png';
import arrow from '../../img/down-arrow.png';

import './AboutMe.scss';

class AboutMe extends Component {
  componentDidMount () {
    this.props.callbackFromParent({ home: false });
    window.scrollTo(0, 0);
  }

  render () {
    const { isMobile } = this.props;

    return (
      <div className="section_aboutme">
        <div className="aboutme__topSection">
          <div className="aboutme__topSection__intro">
            Hi, I’m Audrey. <br />
            I’m a lover of dogs, lemon cake and all things design.
          </div>
          { isMobile && <Link to={AppPaths.WORK_WITH_ME_PATH} className="aboutme__topSection__chatBtn">Let’s chat!</Link> }
          <div className="aboutme__topSection__pic">
            <img src={audrey} alt="audrey" className="aboutme__topSection__pic__img" />
            <img src={signature} alt="signature" className="aboutme__topSection__pic__signature" />
          </div>
          { !isMobile && <img src={arrow} alt="downArrow" className="aboutme__downArrow" /> }
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

AboutMe.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default AboutMe;
