import React, { Component } from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBFooter,
    MDBContainer
} from "mdbreact";
import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Create from './components/personCreate';
import PersonList from "./components/personList";

class App extends Component {
  render() {
    return (
        <Router>
            <MDBNavbar
                color="unique-color-dark"
                dark
            >
                <MDBNavbarBrand href="/">
                    <img
                        src="https://redsnare.co.za/images/logo1.png"
                        height="30"
                        alt=""
                    />
                </MDBNavbarBrand>
            </MDBNavbar>
          <div className="container">
              <br/>
            <h2 class="text-center">Welcome to my first attempt at React</h2> <br/>
            <Create/>
            <PersonList/>
          </div>
            <MDBFooter color="unique-color-dark" className="font-small mt-4">
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a target={"_blank"} href="https://redsnare.co.za/"> Shaun </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </Router>
    );
  }
}

export default App;