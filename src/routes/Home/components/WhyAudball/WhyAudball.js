import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppPaths from '../../../../AppPaths';
import HeaderUnderlined from '../../../../components/HeaderUnderlined/HeaderUnderlined';

import audrey from '../../../../img/audrey.png';
import signature from '../../../../img/signature.png';

import './WhyAudball.scss';

class WhyAudball extends Component {
  render () {
    return (
      <div className="section_whyaudball" id="aboutMe">
        <div className="inner_container">
          <HeaderUnderlined title="Why Audball Studios" />
          <div className="why_audball__text">
            Growing up in a family of entrepreneurs, I witnessed first-hand the ongoing challenges of building and growing a business.  I bring this empathy for the entrepreneurial journey to all of my projects and combine it with a modern design aesthetic refined from years of research and execution.  I love working with smart and driven operators to solve their digital, print and branding design challenges.  My ultimate goal is to make the world appreciate and love your brand as much as you do. 
          </div>
          <Link to={AppPaths.ABOUT_PATH} className="why_audball__aboutmeBtn">About me</Link>
          <img src={audrey} className="why_audball__pic" alt="audrey" />
          <img src={signature} className="why_audball__signature" alt="signature" />
        </div>
      </div>
    );
  }
}

export default WhyAudball;
