import React, { Component } from 'react';
import ProjectsConfig from './ProjectsConfig';
import HeaderUnderlined from '../../components/HeaderUnderlined/HeaderUnderlined';

import './Projects.scss';

class Projects extends Component {
  componentDidMount () {
    this.props.callbackFromParent({ home: false });
    window.scrollTo(0, 0);
  }

  render () {
    const { match } = this.props;
    const projectId = match.params.id;

    return (
      <div className="section_Projects">
        {ProjectsConfig.filter(el => el.slug === projectId).map((item, key) => (
          <div key={key}>
            <div className="project__topSection">
              <div className="project__topSection__name">
                <HeaderUnderlined title={item.title} />
                <div className="project__topSection__brif">
                  {item.brif}
                </div>
              </div>
              <div className="project__topSection__details">
                {item.details}
              </div>
            </div>
            <div className="project__screenshots">
              {item.images.map((item, key) => (
                <img src={item.img} alt={item.title} key={key} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
