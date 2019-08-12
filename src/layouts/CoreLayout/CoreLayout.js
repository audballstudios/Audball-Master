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
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <Router>
        <div>
          <Navbar />
          {routes.map((route, i) => (
            <Route
              path={route.path}
              key={i}
              exact
              render={props => (
                <route.component {...props} routes={route.routes} />
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
