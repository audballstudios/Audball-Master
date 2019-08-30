import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectsConfig from './ProjectsListConfig';
import HeaderUnderlined from '../../components/HeaderUnderlined/HeaderUnderlined';

import './ProjectsListMobile.scss';

class ProjectsListMobile extends Component {
  componentDidMount () {
    this.props.callbackFromParent({ home: false });
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div className="section_ProjectsList">
        <HeaderUnderlined title="Featured Projects" />
        {ProjectsConfig.map((item, key) => (
          <Link to={`/projects/${item.slug}`} key={key} className="projectsList__screenshots">
            <img src={item.mobileThumb} alt={item.title} className="projectsList__screenshots__img" />
          </Link>
        ))}
      </div>
    );
  }
}

export default ProjectsListMobile;
