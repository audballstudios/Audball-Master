import React, { Component } from 'react';

import './WorkWithMeForm.scss';

class WorkWithMeForm extends Component {
  render () {
    return (
      <div className="form_wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form_group">
            <label className="form_label">Name</label>
            <input type="text" className="form_input" />
          </div>
          <div className="form_group">
            <label className="form_label">Email Address</label>
            <input type="text" className="form_input" />
          </div>
          <div className="form_group">
            <label className="form_label">Phone Number</label>
            <input type="text" className="form_input" />
          </div>
          <div className="form_group">
            <label className="form_label">Project Summary</label>
            <textarea className="form_input" />
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
                  />
                  <label className="form_checkbox_label" htmlFor="digitalDesign">digital design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="printDesign"
                    id="printDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                  />
                  <label className="form_checkbox_label" htmlFor="printDesign">print design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="logoDesign"
                    id="logoDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
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
                  />
                  <label className="form_checkbox_label" htmlFor="uxDesign">UX design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="signageDesign"
                    id="signageDesign"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                  />
                  <label className="form_checkbox_label" htmlFor="signageDesign">signage design</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="notSure"
                    id="notSure"
                    type="checkbox"
                    className="form_checkbox_checkbox"
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
                  />
                  <label className="form_checkbox_label" htmlFor="branding">branding</label>
                </div>
                <div className="form_checkbox">
                  <input
                    name="packaging"
                    id="packaging"
                    type="checkbox"
                    className="form_checkbox_checkbox"
                  />
                  <label className="form_checkbox_label" htmlFor="packaging">packaging</label>
                </div>
              </div>
            </div>
          </div>
          <input type="submit" value="Submit" className="form_submitBtn" onClick={this.props.formSubmited} />
        </form>
      </div>
    );
  }
}

export default WorkWithMeForm;
