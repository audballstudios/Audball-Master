import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderUnderlined from '../../../../components/HeaderUnderlined/HeaderUnderlined';
import Carousel from '../../../../components/Carousel/carousel';
import IndicatorDots from '../../../../components/Carousel/indicator-dots';

import quote1 from '../../../../img/quotes/quote-1.png';
import quote2 from '../../../../img/quotes/quote-2.png';
import quote3 from '../../../../img/quotes/quote-3.png';
import quote4 from '../../../../img/quotes/quote-4.png';

import './Testimonials.scss';

class Testimonials extends Component {
  render () {
    const { isMobile } = this.props;

    const testimonialList = [{
      text: 'Audrey did a great job designing our new restaurant website and logo. She was creative, attentive and reliable and is certainly one of the best graphic designers in Austin!',
      quoteImg: quote1,
      color: '#89adbd',
      userName: 'David G.',
      companyName: 'Restaurant owner',
      avatar: 'D'
    },
    {
      text: "I rarely leave reviews but felt compelled because Audrey did incredible work on our branding, packaging and product launch.  She truly cared about our project and took the time to learn about our culture and vision.  I'm looking forward to working with her again!",
      quoteImg: quote2,
      color: '#f1574b',
      userName: 'Peter K.',
      companyName: 'True North',
      avatar: 'P'
    },
    {
      text: "I couldn't be happier with the work from Audball Studios. Audrey was great to work with from the outset and she delivered everything I asked for.  Audrey created an amazing logo with a number of different options and then she really did a spectacular job with our corporate website. I plan on using her services again.",
      quoteImg: quote3,
      color: '#184353',
      userName: 'Phil F.',
      companyName: 'iBynd',
      avatar: 'P'
    },
    {
      text: "Audball Studios is awesome. Period. I couldn't be happier with the redesign of our website.  Audrey has changed the way I think about design and how it impacts our customers.",
      quoteImg: quote4,
      color: '#ecd596',
      userName: 'Tony T.',
      companyName: 'Texas Crane Services',
      avatar: 'T'
    }];

    const testimonialListMobile = [{
      text: 'Audrey did a great job designing our new restaurant website and logo. She was creative, attentive and reliable and is certainly one of the best graphic designers in Austin!',
      quoteImg: quote1,
      color: '#89adbd',
      userName: 'David G.',
      companyName: 'Restaurant owner',
      avatar: 'D'
    },
    {
      text: 'I rarely leave reviews but felt compelled because Audrey did incredible work on our branding, packaging and product launch.  She truly cared about our project and took the time to learn about our culture and vision.',
      quoteImg: quote2,
      color: '#f1574b',
      userName: 'Peter K.',
      companyName: 'True North',
      avatar: 'P'
    },
    {
      text: "I couldn't be happier with the work from Audball Studios. Audrey was great to work with from the outset and she delivered everything I asked for.  Audrey created an amazing logo with a number of different options…",
      quoteImg: quote3,
      color: '#184353',
      userName: 'Phil F.',
      companyName: 'iBynd',
      avatar: 'P'
    },
    {
      text: "Audball Studios is awesome. Period. I couldn't be happier with the redesign of our website.  Audrey has changed the way I think about design and how it impacts our customers.",
      quoteImg: quote4,
      color: '#ecd596',
      userName: 'Tony T.',
      companyName: 'Texas Crane Services',
      avatar: 'T'
    }];

    return (
      <div className="section_testimonials" id="reviews">
        <HeaderUnderlined title="Happy Customers" />
        {/* <div className="testimonials__wrapper">
          {testimonialList.map((item, key) => (
            <div className="testimonials__item" key={key}>
              <a
                href="https://www.google.com/search?q=audball+studios&oq=audball+studios&aqs=chrome..69i57j0j69i60l2j69i61j0.2003j0j1&sourceid=chrome&ie=UTF-8#lrd=0x8644b5c82e08ab23:0x1d06a6626e915d93,1"
                target="_blank"
                rel="noopener noreferrer"
                className="testimonials__item__card"
              >
                <img src={item.quoteImg} className="testimonials__item__card__quote" alt="quote" />
                <div className="testimonials__item__card__text">
                  {item.text}
                </div>
                <div className="testimonials__item__card__user_info">
                  <div className="testimonials__item__card__user_info__avatar" style={{ background: item.color }}>{item.avatar}</div>
                  <div className="testimonials__item__card__user_info__name">
                    {item.userName}
                    <p>{item.companyName}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div> */}

        {isMobile ?
          <Carousel loop auto interval={5000} widgets={[IndicatorDots]} className="testimonials__wrapper">
            {testimonialListMobile.map((item, key) => (
              <div className="testimonials__item" key={key}>
                <a
                  href="https://www.google.com/search?q=audball+studios&oq=audball+studios&aqs=chrome..69i57j0j69i60l2j69i61j0.2003j0j1&sourceid=chrome&ie=UTF-8#lrd=0x8644b5c82e08ab23:0x1d06a6626e915d93,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonials__item__card"
                >
                  <img src={item.quoteImg} className="testimonials__item__card__quote" alt="quote" />
                  <div className="testimonials__item__card__text">
                    {item.text}
                  </div>
                  <div className="testimonials__item__card__user_info">
                    <div className="testimonials__item__card__user_info__avatar" style={{ background: item.color }}>{item.avatar}</div>
                    <div className="testimonials__item__card__user_info__name">
                      {item.userName}
                      <p>{item.companyName}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Carousel>
          :
          <div className="testimonials__wrapper">
            {testimonialList.map((item, key) => (
              <div className="testimonials__item" key={key}>
                <a
                  href="https://www.google.com/search?q=audball+studios&oq=audball+studios&aqs=chrome..69i57j0j69i60l2j69i61j0.2003j0j1&sourceid=chrome&ie=UTF-8#lrd=0x8644b5c82e08ab23:0x1d06a6626e915d93,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonials__item__card"
                >
                  <img src={item.quoteImg} className="testimonials__item__card__quote" alt="quote" />
                  <div className="testimonials__item__card__text">
                    {item.text}
                  </div>
                  <div className="testimonials__item__card__user_info">
                    <div className="testimonials__item__card__user_info__avatar" style={{ background: item.color }}>{item.avatar}</div>
                    <div className="testimonials__item__card__user_info__name">
                      {item.userName}
                      <p>{item.companyName}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

Testimonials.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Testimonials;
