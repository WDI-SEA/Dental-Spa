// Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Styling, etc.
import './App.css';

// My Components
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Story from './pages/Story';

class App extends Component {
  render() {
    const ourServices = ["Cleaning", "Whitening", "Braces", "Fluoride", "Gum Massage Therapy", "Sharpening"];
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/our-story">Our Story</Link></li>
                  <li><Link to="/give-us-a-ring">Contact</Link></li>
                </ul>
              </nav>
              <img alt="tooth heaven" src="https://banner2.kisspng.com/20180211/jrw/kisspng-mouth-tooth-dentistry-bruxism-lip-plastic-teeth-5a807848666315.7376651415183688404194.jpg" className="App-logo" />
            </header>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/services" component={
                () => (<Services ourServices={ourServices} />)
              } />
              <Route path="/our-story" component={
                () => (<Story name="Dental SPA" />)
              } />
              <Route path="/give-us-a-ring" component={
                () => (<Contact name="Brandi Butler" phone="555-123-4567" />)
              } />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
