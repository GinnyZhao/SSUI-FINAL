import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Logo from "../img/logo.png";
import "./NavBar.css";

class NavBar extends Component {

// const NavBar = () => {
  render() {
  return (
    <div>
      <div className="topbar"></div>
        <br />
        <br/>

      <div className="container-fluid">
          <div className="row mx-n5">
              <div className="col-3">
                  <NavLink to="/">
                      <img id="logo" src={Logo} className="mx-auto d-block" alt="Logo" />
                  </NavLink>
              </div>
              <div className="col-1"> </div>
              <div className="col-8">
                  <br />
                  <h1 id="title"> <b> Interactive Visualizations of COVID-19 </b> </h1>
              </div>
          </div>
          <br/>
          <br/>
          <nav class="navbar navbar-expand-lg navborder">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav-front">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/">
                    Covid SIR Model
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/new">
                    Country Data
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/">
                    What you can do 
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <br/>
  
      </div>
    </div>

    
  )}
};

export default NavBar;