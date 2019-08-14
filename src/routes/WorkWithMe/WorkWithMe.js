import React, { Component } from 'react';
import WorkWithMeForm from './components/WorkWithMeForm/WorkWithMeForm';
import ThankYou from './components/ThankYou/ThankYou';

import './WorkWithMe.scss';

class WorkWithMe extends Component {
  constructor (props) {
    super(props);

    this.state = {
      formSubmited: false
    };

    this.formSubmited = this.formSubmited.bind(this);
  }

  componentDidMount () {
    this.props.callbackFromParent({ home: false });
    window.scrollTo(0, 0);
  }

  formSubmited (e) {
    this.setState({ formSubmited: true });
    window.scrollTo(0, 300);
  }

  render () {
    const Submited = this.state.formSubmited;

    let form;

    if (Submited) {
      form = <ThankYou />;
    } else {
      form = <WorkWithMeForm formSubmited={this.formSubmited} />;
    }

    return (
      <div className="section_workWithMe">
        {form}
      </div>
    );
  }
}

export default WorkWithMe;
