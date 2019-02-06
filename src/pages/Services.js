import React, { Component } from 'react';

class Services extends Component {
  constructor(){
    super();
    this.myTextbox = React.createRef();
  }
  componentDidMount(){
    document.title = 'Our Services';
  }
  submitForm = (e) => {
    console.log('Clicked Submit Form');
    console.log('The whole node:', this.myTextbox.current);
    console.log('You typed in', this.myTextbox.current.value);
    e.preventDefault();
  }
  render() {
    const formattedServices = this.props.ourServices.map((item, i) => {
      return <li key={'item' + i}>{item}</li>
    });
    return (
      <div>
        <h1>Our Services</h1>
        <h2>We currently offer:</h2>
        <ol>
          {formattedServices}
        </ol>
        <hr />
        <h3 className="subtext">
          Not seeing what you need? What services would you like?
        </h3>
        <form onSubmit={this.submitForm}>
          <p>Service Name:</p>
          <input id="abc" type="text" ref={this.myTextbox} />
          <input type="submit" value="Send Request" />
        </form>
      </div>
    );
  }
}

export default Services;
