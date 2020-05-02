import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Rate from './components/Rate.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/rate" component={Rate}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
