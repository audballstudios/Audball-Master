import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterTitle from './components/FooterTitle/FooterTitle';

import footerLogo from '../../img/footer-logo.png';
import facebookIcon from '../../img/social-icons/facebook.png';
import pinterestIcon from '../../img/social-icons/pinterest.png';
import linkedinIcon from '../../img/social-icons/linkedin.png';

import './Footer.scss';

class Footer extends Component {
  render () {
    const capabilityList = [{
      title: 'digital design'
    },
    {
      title: 'UI/UX design'
    },
    {
      title: 'logo design'
    },
    {
      title: 'brand identity'
    },
    {
      title: 'packaging design'
    },
    {
      title: 'product design'
    }];

    const reviewsList = [{
      title: 'Yelp',
      href: 'https://www.yelp.com/biz/audball-studios-austin'
    },
    {
      title: 'Google',
      href: 'https://www.google.com/search?q=audball+studios&oq=audball+studios&aqs=chrome..69i57j0j69i60l2j69i61j0.2003j0j1&sourceid=chrome&ie=UTF-8#lrd=0x8644b5c82e08ab23:0x1d06a6626e915d93,1'
    }];

    const socialIcons = [{
      name: 'Facebook',
      icon: facebookIcon,
      href: 'https://www.facebook.com/audballstudios'
    },
    {
      name: 'Pinteres',
      icon: pinterestIcon,
      href: 'https://www.pinterest.com/audreyturner2'
    },
    {
      name: 'Linkedin',
      icon: linkedinIcon,
      href: 'https://www.linkedin.com/company/audball-studios'
    }];

    return (
      <footer className="footer__container">
        <div className="footer__main">
          <div className="footer__main__logo_col">
            <img src={footerLogo} className="footer__main__logo" alt="Audball Studios" />
            <div className="footer__main__logo_name">Audball Studios</div>
          </div>
          <div className="footer__main_col col-capabilites">
            <FooterTitle title="Capabilites" lineWidth="79" />
            <ul className="footer__main__link__wrapper">
              {capabilityList.map((item, key) => (
                <li className="footer__main__link" key={key}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div className="footer__main_col col-reviews">
            <FooterTitle title="Reviews" lineWidth="75" />
            <ul className="footer__main__link__wrapper">
              {reviewsList.map((item, key) => (
                <li className="footer__main__link" key={key}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__main_col col-aboutme">
            <FooterTitle title="About me" lineWidth="94" />
          </div>

          <div className="footer__main_col col-contact">
            <FooterTitle title="Contact" lineWidth="76" />
            <ul className="footer__main__link__wrapper">
              <li className="footer__main__link">
                <a href="mailto:audrey@audballstudios.com">audrey@audballstudios.com</a>
              </li>
            </ul>
            <div className="social_icons">
              {socialIcons.map((item, key) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social_icons__link"
                  key={key}
                >
                  <img src={item.icon} alt={item.name} />
                </a>
              ))}
            </div>
          </div>

        </div>
        <div className="footer__second">
          2019 Audball Studios. All rights reserved.
        </div>
      </footer>
    );
  };
};

export default Footer;
