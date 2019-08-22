import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppPaths from '../../AppPaths';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Home from '../../routes/Home/Home';
import AboutMe from '../../routes/AboutMe/AboutMe';
import WorkWithMe from '../../routes/WorkWithMe/WorkWithMe';
import Projects from '../../routes/Projects/Projects';
import './CoreLayout.scss';
import '../../styles/styles.scss';

const routes = [
  {
    path: AppPaths.HOME_PATH,
    component: Home
  },
  {
    path: AppPaths.HOMEPAGE,
    component: Home
  },
  {
    path: AppPaths.ABOUT_PATH,
    component: AboutMe
  },
  {
    path: AppPaths.WORK_WITH_ME_PATH,
    component: WorkWithMe
  },
  {
    path: AppPaths.PROJECTS_PATH + '/:id',
    component: Projects
  }
];

class CoreLayout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listDataFromChild: '',
      activeClass: '',
      isMobile: false
    };
    this.myCallback = this.myCallback.bind(this);
  }

  myCallback = (dataFromChild) => {
    this.setState({ listDataFromChild: dataFromChild.home });
  }

  componentDidMount () {
    if (window.innerWidth <= 767) {
      this.setState({ isMobile: true });
    }

    window.addEventListener('scroll', () => {
      if (this.state.listDataFromChild === true) {
        let activeClass = '';
        if (window.scrollY === 0) {
          activeClass = 'navbar__transparent';
        }
        this.setState({ activeClass });
      }
    });
  }

  render () {
    if (this.state.listDataFromChild === true && window.scrollY === 0) {
      this.state.activeClass = 'navbar__transparent';
    }

    const { isMobile } = this.state;

    return (
      <Router>
        <div>
          <Navbar
            activeclassname={this.state.activeClass}
            isMobile={isMobile}
          />
          {routes.map((route, i) => (
            <Route
              path={route.path}
              key={i}
              exact
              render={props => (
                <route.component callbackFromParent={this.myCallback} {...props} routes={route.routes} />
              )}
            />
          ))}
          <Footer />
        </div>
      </Router>
    );
  }
};

export default CoreLayout;
