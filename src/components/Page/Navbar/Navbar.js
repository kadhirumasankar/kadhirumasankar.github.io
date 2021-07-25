import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./Navbar.css";

export default class Navbar extends Component {
  // COMBAK: state is unused for now because email doesn't get copied to
  // clipboard
  // state = {
  //   emailCopied: false
  // }
  render() {
    return (
      <div>
        <a id="PageBody" />
        <div id="navbar-grid">
          <div>
            <NavLink
              activeStyle={{
                color: "inherit",
                background: "#556070",
              }}
              to="/about"
              className="navbar-link"
            >
              <Icon name="user" circular />
              About Me
            </NavLink>
          </div>
          <div>
            <NavLink
              activeStyle={{
                color: "inherit",
                background: "#556070",
              }}
              exact
              to="/"
              className="navbar-link"
            >
              <Icon name="clipboard list" circular />
              My Work
            </NavLink>
          </div>
          <div className="tooltip" href="mailto:kadhirus99@gmail.com">
            <a className="navbar-link" href="mailto:kadhirus99@gmail.com">
              <span
                className="navbar-link"
                onClick={() => {
                  navigator.clipboard.writeText("kadhirus99@gmail.com");
                  console.log(this.state.emailCopied);
                  this.setState({ emailCopied: true });
                }}
                onMouseEnter={() => {
                  this.setState({ emailCopied: false });
                }}
              >
                <Icon name="mail" circular />
                kadhirus99@gmail.com
              </span>
              <span className="tooltiptext">Click to send me an email</span>
            </a>
          </div>
          <div className="tooltip">
            <a
              className="navbar-link"
              href="https://www.linkedin.com/in/kadhirus99/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" circular />
              <span className="navbar-link-text">
                linkedin.com/in/kadhirus99
              </span>
            </a>
            <span className="tooltiptext">Click to go to my LinkedIn page</span>
          </div>
          <div className="tooltip">
            <a
              className="navbar-link"
              href="https://github.com/kadhirumasankar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" circular />
              <span className="navbar-link-text">
                github.com/kadhirumasankar
              </span>
            </a>
            <span className="tooltiptext">Click to go to my Github page</span>
          </div>
        </div>
      </div>
    );
  }
}
