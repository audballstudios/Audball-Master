import React from 'react';
import PropTypes from 'prop-types';

import './FooterTitle.scss';

const FooterTitle = ({ title, lineWidth }) => (
  <div className="footerTitle_main">
    <div className="footerTitle_underlined">
      {title}
    </div>
    <div className="footerTitle_underlined_line" style={{ width: lineWidth + 'px' }} />
  </div>
);

FooterTitle.propTypes = {
  title: PropTypes.string.isRequired,
  lineWidth: PropTypes.string.isRequired
};

export default FooterTitle;
