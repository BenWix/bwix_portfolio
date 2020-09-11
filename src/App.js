import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ContactButton from './components/ContactButton'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './container/Portfolio'
import About from './container/About'
import './App.css';

import ContactPage from './container/ContactPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <ContactButton />
            <Navbar />
            <div className='content'>
              <Route exact path='/' component={Home} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={ContactPage} />
            </div>
          </Router>
        </div>
        <div className='footer'>

        </div>
      </React.Fragment>
    )
  }
}

export default App;
