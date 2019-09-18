import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WorkWithMeForm.scss';

class WorkWithMeForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      summary: '',
      formSubmited: false,
      digitalDesign: false,
      printDesign: false,
      logoDesign: false,
      uxDesign: false,
      signageDesign: false,
      notSure: false,
      branding: false,
      packaging: false,
      checkedItems: new Map()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static sender = 'audrey@audballstudios.com';

  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const isChecked = target.type === 'checkbox' ? target.checked : null;

    this.setState({
      [name]: value,
      checkedItems: this.state.checkedItems.set(name, isChecked)

    });
  }

  handleSubmit (event) {
    const serviceArr = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        serviceArr.push(key);
      }
    }
    const services = serviceArr.toString();

    event.preventDefault();
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.fullName,
      this.state.email,
      this.state.phoneNumber,
      this.state.summary,
      services
    );

    this.setState({
      formSubmited: true
    });
  }

  sendFeedback (templateId, senderEmail, receiverEmail, fullName, email, phoneNumber, summary, services) {
    window.emailjs
      .send('gmail', templateId, {
        senderEmail,
        receiverEmail,
        fullName,
        email,
        phoneNumber,
        summary,
        services
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
        this.props.getPropsFromChild(this.state.formSubmited);
      })

      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render () {
    return (
      <div className="form_wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form_group">
            <label className="form_label">Name</label>
            <input
              type="text"
              className="form_input"
              id="fullName"
              name="fullName"
              onChange={this.handleChange}
              value={this.state.fullName} />
          </div>
          <div className="form_group">
            <label className="form_label">Email Address</label>
            <input
              type="text"
              className="form_input"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email} />
          </div>
          <div className="form_group">
            <label className="form_label">Phone Number</label>
            <input
              type="text"
              className="form_input"
              id="phoneNumber"
              name="phoneNumber"
              onChange={this.handleChange}
              value={this.state.phoneNumber} />
          </div>
          <div className="form_group">
            <label className="form_label">Project Summary</label>
            <textarea
              className="form_input"
              id="summary"
              name="summary"
              onChange={this.handleChange}
              value={this.state.summary} />
          </div>
          <div className="form_group services_needed">
            <label className="form_label">Services Needed <small>(check all that apply):</small></label>
            <div className="services_row">
              <div className="services_col">
                <div className="form_checkbox">
                  <input
                    name="digitalDesign"
                    id="digitalDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.digitalDesign}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="digitalDesign">digital design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="printDesign"
                    id="printDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.printDesign}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="printDesign">print design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="logoDesign"
                    id="logoDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.logoDesign}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="logoDesign">logo design</label>
                </div>
              </div>

              <div className="services_col">
                <div className="form_checkbox">
                  <input
                    name="uxDesign"
                    id="uxDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.uxDesign}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="uxDesign">UX design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="signageDesign"
                    id="signageDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.signageDesign}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="signageDesign">signage design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="notSure"
                    id="notSure"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.notSure}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="notSure">not sure</label>
                </div>
              </div>

              <div className="services_col">
                <div className="form_checkbox">
                  <input
                    name="branding"
                    id="branding"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.branding}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="branding">branding</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="packaging"
                    id="packaging"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                    checked={this.state.packaging}
                    onChange={this.handleChange}
                  />
                  <label className="form_checkbox_label" htmlFor="packaging">packaging</label>
                </div>
              </div>
            </div>
          </div>
          <input type="submit" value="Submit" className="form_submitBtn" />
        </form>
      </div>
    );
  }
}

WorkWithMeForm.propTypes = {
  env: PropTypes.object.isRequired
};

export default WorkWithMeForm;
