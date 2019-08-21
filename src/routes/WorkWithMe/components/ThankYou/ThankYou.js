import React, { Component } from 'react';

import signature from '../../../../img/signature-dark.png';

import './ThankYou.scss';

class ThankYou extends Component {
  render () {
    return (
      <div className="form_wrapper thankYou_wrapper">
        <div className="thankYou__text">Thanks for reaching out! We’ll be in touch within two business days.</div>
        <img src={signature} className="thankYou__signature" />
      </div>
    );
  }
}

export default ThankYou;
