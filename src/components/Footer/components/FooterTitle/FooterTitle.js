import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './FooterTitle.scss';

const FooterTitle = ({ title, lineWidth, url }) => (
  <div className="footerTitle_main">
    <div className="footerTitle_underlined">
      { url ? <Link to={url}>{title}</Link> : title }
    </div>
    <div className="footerTitle_underlined_line" style={{ width: lineWidth + 'px' }} />
  </div>
);

FooterTitle.propTypes = {
  title: PropTypes.string.isRequired,
  lineWidth: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default FooterTitle;
