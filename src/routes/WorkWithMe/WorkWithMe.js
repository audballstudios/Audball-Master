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

  formSubmited (e) {
    this.setState({ formSubmited: true });
  }

  render () {
    const Submited = this.state.formSubmited;

    console.log(Submited);

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
