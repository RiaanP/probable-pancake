import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/personCreate';
import PersonList from "./components/personList";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            </nav> <br/>
            <h2>Welcome to React CRUD Tutorial</h2> <br/>
            <Create/>
            <PersonList/>
          </div>
        </Router>
    );
  }
}

export default App;