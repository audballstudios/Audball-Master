import React from 'react';
import PropTypes from 'prop-types';

import './HeaderUnderlined.scss';

const HeaderUnderlined = ({ title }) => (
  <div className="header_main">
    <div className="header_underlined">
      {title}
    </div>
    <div className="header_underlined_line" />
  </div>
);

HeaderUnderlined.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeaderUnderlined;
