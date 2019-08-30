import React from 'react';
import PropTypes from 'prop-types';
import HeaderUnderlined from '../../../../components/HeaderUnderlined/HeaderUnderlined';

import './DetailSection.scss';

const DetailSection = ({ item }) => (
  <div className={[item.class, 'aboutme__bottomSection__sectionRow'].join(' ')}>
    <HeaderUnderlined title={item.title} />
    <div className="aboutme__bottomSection__sectionRow__details">{item.details}</div>
    <div className="aboutme__bottomSection__sectionRow__boxRow">
      {item.boxDetails.map((item, key) => (
        <div className="aboutme__bottomSection__sectionRow__boxCol" key={key}>
          <div className="aboutme__bottomSection__sectionRow__imgWrapper">
            <img src={item.img} alt="nyu" />
          </div>
          <div className="aboutme__bottomSection__sectionRow__boxText">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  </div>
);

DetailSection.propTypes = {
  item: PropTypes.object.isRequired
};

export default DetailSection;
