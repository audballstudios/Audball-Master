import React, { Component } from 'react';
import HeaderUnderlined from '../../../../components/HeaderUnderlined/HeaderUnderlined';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppPaths from '../../../../AppPaths';

import pv from '../../../../img/projects-thumbs/pv-1.png';
import trueNorth from '../../../../img/projects-thumbs/true-north-3.png';
import windfall from '../../../../img/projects-thumbs/windfall.png';
import zk from '../../../../img/projects-thumbs/zk-1.png';

import casa from '../../../../img/projects-thumbs/casa-1.png';
import cd from '../../../../img/projects-thumbs/chicken-dinner-1.png';
import heal from '../../../../img/projects-thumbs/heal-2.png';
import ibynd from '../../../../img/projects-thumbs/ibynd-1.png';

import './FeaturedProjects.scss';

class FeaturedProjects extends Component {
  render () {
    const { isMobile } = this.props;

    const FeaturedProjects1 = [{
      slug: 'casa-planta',
      name: 'Casa Planta',
      brif: 'Branding, logo design, packaging design',
      img: casa
    },
    {
      slug: 'zest-kitchen',
      name: 'Zest Kitchen',
      brif: 'Branding, logo design, website design, mobile design, UI/UX design',
      img: zk
    },
    {
      slug: 'true-north',
      name: 'True North',
      brif: 'Branding, logo design, packaging design',
      img: trueNorth
    },
    {
      slug: 'heal',
      name: 'Heal',
      brif: 'Branding, logo design, packaging design, email template design',
      img: heal
    },
    {
      slug: 'casa-planta',
      name: 'Casa Planta',
      brif: 'Branding, logo design, packaging design',
      img: casa
    },
    {
      slug: 'zest-kitchen',
      name: 'Zest Kitchen',
      brif: 'Branding, logo design, website design, mobile design, UI/UX design',
      img: zk
    },
    {
      slug: 'true-north',
      name: 'True North',
      brif: 'Branding, logo design, packaging design',
      img: trueNorth
    },
    {
      slug: 'heal',
      name: 'Heal',
      brif: 'Branding, logo design, packaging design, email template design',
      img: heal
    }];

    const FeaturedProjects2 = [{
      slug: 'ibynd',
      name: 'iBynd',
      brif: 'Branding, logo design, website design, UI/UX design',
      img: ibynd
    },
    {
      slug: 'parachute-ventures',
      name: 'Parachute Ventures',
      brif: 'Presentation deck design',
      img: pv
    },
    {
      slug: 'windfall',
      name: 'Windfall',
      brif: 'Website design, mobile design, UI/UX design, product design, logo design',
      img: windfall
    },
    {
      slug: 'chicken-dinner',
      name: 'Chicken Dinner',
      brif: 'Logo design, mobile design, UI/UX design, product design',
      img: cd
    },
    {
      slug: 'ibynd',
      name: 'iBynd',
      brif: 'Branding, logo design, website design, UI/UX design',
      img: ibynd
    },
    {
      slug: 'parachute-ventures',
      name: 'Parachute Ventures',
      brif: 'Presentation deck design',
      img: pv
    },
    {
      slug: 'windfall',
      name: 'Windfall',
      brif: 'Website design, mobile design, UI/UX design, product design, logo design',
      img: windfall
    },
    {
      slug: 'chicken-dinner',
      name: 'Chicken Dinner',
      brif: 'Logo design, mobile design, UI/UX design, product design',
      img: cd
    }];

    return (
      <div className="section_featured_projects" id="projects">
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
          {FeaturedProjects2.map((item, key) => (
            <Link to={`/projects/${item.slug}`} className="projects_row__item" key={key}>
              <div className="projects_row__item__overlay">
                <div className="project_name">{item.name}</div>
                <div className="project_brif">{item.brif}</div>
              </div>
              <img src={item.img} alt={item.name} className="projects_row__img" />
            </Link>
          ))}
        </div>

        { isMobile && <Link to={AppPaths.FEATUREDPROJECTS_PATH} className="projects__viewAllBtn">View all</Link> }

      </div>
    );
  }
}

FeaturedProjects.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default FeaturedProjects;
