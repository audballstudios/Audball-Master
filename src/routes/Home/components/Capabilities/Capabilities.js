import React, { Component } from 'react';
import HeaderUnderlined from '../../../../components/HeaderUnderlined/HeaderUnderlined';

import './Capabilities.scss';

class Capabilities extends Component {
  render () {
    const capabilityList = [{
      title: 'UI/UX Design',
      category: 'DIGITAL DESIGN',
      color: '#f1574b',
      includes: 'Desktop and mobile websites, native mobile apps, UX research, rapid prototyping, Wix, Squarespace'
    },
    {
      title: 'Branding and Logo Design',
      category: 'IDENTITY',
      color: '#89adbd',
      includes: 'Product launches, logo and icon creation, naming, strategy, brand guidelines'
    },
    {
      title: 'Print & Packaging Design',
      category: 'PRINT DESIGN',
      color: '#0099a1',
      includes: 'Retail packaging, labels, direct mailers, stationery, posters and signage'
    },
    {
      title: 'Web Development',
      category: 'DEVELOPMENT',
      color: '#ecd596',
      includes: 'Web front-end, mobile apps, hosting and technical architecture'
    }];

    return (
      <div className="section_capabilities" id="capabilities">
        <HeaderUnderlined title="Capabilities" />
        <div className="capabilities__wrapper">
          {capabilityList.map((item, key) => (
            <div className="capabilities__item" key={key}>
              <div className="capabilities__item__card">
                <div className="capabilities__item__card__circle" style={{ background: item.color }} />
                <div className="capabilities__item__card__category" style={{ color: item.color }}>
                  {item.category}
                </div>
                <div className="capabilities__item__card__title">
                  {item.title}
                </div>
                <div className="capabilities__item__card__includes">
                  <div className="capabilities__item__card__line" style={{ background: item.color }} />
                  Includes:
                  <p>{item.includes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Capabilities;
