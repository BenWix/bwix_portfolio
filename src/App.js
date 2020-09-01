import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ContactButton from './components/ContactButton'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './container/Portfolio'
import About from './container/About'
import './App.css';

import mountains from './images/MountainAndTree.png'
import ContactPage from './container/ContactPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <Router>
          <ContactButton />
          <Navbar />
          <div className='text'>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={ContactPage} />

          </div>

        </Router>
      </div>
      <footer>
        <div className='footer-pic'>
          <img src={mountains} alt=''/>
        </div>
      </footer>
      </React.Fragment>
    )
  }
}

export default App;
