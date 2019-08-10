import React, { Component } from 'react';
import HeaderUnderlined from '../../../../components/HeaderUnderlined/HeaderUnderlined';
import { Link } from 'react-router-dom';

import pv from '../../../../img/projects-thumbs/pv-1.png';
import trueNorth from '../../../../img/projects-thumbs/true-north-3.png';
import windfall from '../../../../img/projects-thumbs/windfall.png';
import zk from '../../../../img/projects-thumbs/zk-1.png';

import './FeaturedProjects.scss';

class FeaturedProjects extends Component {
  render () {
    const FeaturedProjects1 = [{
      slug: 'parachute-ventures',
      name: 'Parachute Ventures',
      brif: 'Presentation deck design',
      img: pv
    },
    {
      slug: 'true-north',
      name: 'True North',
      brif: 'Branding, logo design, packaging design',
      img: trueNorth
    },
    {
      slug: 'windfall',
      name: 'Windfall',
      brif: 'Website design, mobile design, UI/UX design, product design, logo design',
      img: windfall
    },
    {
      slug: 'zest-kitchen',
      name: 'Zest Kitchen',
      brif: 'Branding, logo design, website design, mobile design, UI/UX design',
      img: zk
    },
    {
      slug: 'parachute-ventures',
      name: 'Parachute Ventures',
      brif: 'Presentation deck design',
      img: pv
    },
    {
      slug: 'true-north',
      name: 'True North',
      brif: 'Branding, logo design, packaging design',
      img: trueNorth
    },
    {
      slug: 'windfall',
      name: 'Windfall',
      brif: 'Website design, mobile design, UI/UX design, product design, logo design',
      img: windfall
    },
    {
      slug: 'zest-kitchen',
      name: 'Zest Kitchen',
      brif: 'Branding, logo design, website design, mobile design, UI/UX design',
      img: zk
    }];

    return (
      <div className="section_featured_projects">
        <HeaderUnderlined title="Featured Projects" />
        <div className="projects_row first_row">
          {FeaturedProjects1.map((item, key) => (
            <Link to={`/projects/${item.slug}`} className="projects_row__item" key={key}>
              <div className="projects_row__item__overlay">
                <div className="project_name">{item.name}</div>
                <div className="project_brif">{item.brif}</div>
              </div>
              <img src={item.img} alt={item.name} className="projects_row__img" />
            </Link>
          ))}
        </div>
        <div className="projects_row second_row">
          {FeaturedProjects1.map((item, key) => (
            <div className="projects_row__item" key={key}>
              <div className="projects_row__item__overlay">
                <div className="project_name">{item.name}</div>
                <div className="project_brif">{item.brif}</div>
              </div>
              <img src={item.img} alt={item.name} className="projects_row__img" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FeaturedProjects;
