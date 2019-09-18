import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WorkWithMeForm from './components/WorkWithMeForm/WorkWithMeForm';
import ThankYou from './components/ThankYou/ThankYou';

import './WorkWithMe.scss';

class WorkWithMe extends Component {
  constructor (props) {
    super(props);

    this.state = {
      formSubmited: false
    };
  }

  componentDidMount () {
    this.props.callbackFromParent({ home: false });
    window.scrollTo(0, 0);
  }

  getPropsFromChild = (formSubmited) => {
    this.setState({ formSubmited: formSubmited });
    window.scrollTo(0, 300);
  }

  render () {
    const Submited = this.state.formSubmited;

    let form;

    if (Submited) {
      form = <ThankYou />;
    } else {
      form = <WorkWithMeForm env={this.props.env} formSubmited={this.formSubmited} getPropsFromChild={this.getPropsFromChild} />;
    }

    return (
      <div className="section_workWithMe">
        {form}
      </div>
    );
  }
}

WorkWithMe.propTypes = {
  env: PropTypes.object.isRequired
};

export default WorkWithMe;
