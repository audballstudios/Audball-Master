import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import Capabilities from './components/Capabilities/Capabilities';
import Testimonials from './components/Testimonials/Testimonials';
import WhyAudball from './components/WhyAudball/WhyAudball';
import CallToAction from '../../components/CallToAction/CallToAction';

import './Home.scss';

class Home extends Component {
  componentDidMount () {
    this.props.callbackFromParent({ home: true });
    window.scrollTo(0, 0);
  }

  render () {
    const { isMobile } = this.props;
    return (
      <div>
        <Header />
        <FeaturedProjects />
        <Capabilities />
        <Testimonials isMobile={isMobile} />
        <WhyAudball />
        <CallToAction />
      </div>
    );
  }
}

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Home;
