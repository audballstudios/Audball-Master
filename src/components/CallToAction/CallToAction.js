import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppPaths from '../../AppPaths';

import './CallToAction.scss';

class CallToAction extends Component {
  render () {
    return (
      <div className="section_calltoaction">
        <div className="calltoaction">
          <div className="calltoaction__title">Have a design project? We’re ready!</div>
          <Link to={AppPaths.WORK_WITH_ME_PATH} className="calltoaction__chatBtn">Let’s chat!</Link>
        </div>
      </div>
    );
  }
}

export default CallToAction;
