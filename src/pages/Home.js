import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Dental SPA</h1>
        <p className="subtext">
          Treat your teeth to what they really deserve!
        </p>
        <div className="image">
          <img alt="akjshd akshd" src="https://www.yourdentistryguide.com/wp-content/uploads/2017/12/dental-spa-smile-924x425.jpg" />
        </div>
        <div>
          <p>You and your teeth with have the most unreal experience together.</p>
          <p className="subtext">Experience mouth-wide luxury for an affordable price!</p>
        </div>

      </div>
    );
  }
}

export default Home;
