import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import './firebase/firebase';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
