import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {

// const NavBar = () => {
  render() {
  return (
      <div className="bottombar">
          <div className="container-fluid">
              <div className="row footer">
                  <div className="col footer">
                      <p className="footer"> Copyright @ 2020 - All Rights Reserved </p>
                  </div>
                  <div className="col footer"></div>
                  <div className="col footer">
                      <p className="footer"> Designed by Erin Beasley and Ginny Zhao</p>
                  </div>

              </div>
          </div>
      </div>

    
  )}
};

export default Footer;