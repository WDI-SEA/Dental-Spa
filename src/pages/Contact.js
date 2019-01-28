import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p className="subtext">Come on, make that call. You know you want to...</p>
        <div>
          <p>Call {this.props.name} at {this.props.phone}!</p>
          <h1>OR...</h1>
          <p>Drive to our location for an in-person appointment:</p>
          <p className="subtext">1234 Fake Street</p>
          <p className="subtext">Seattle, WA 98101</p>
        </div>
      </div>
    );
  }
}

export default Contact;
