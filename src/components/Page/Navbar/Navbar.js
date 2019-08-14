import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import './Navbar.css'

export default class Navbar extends Component {
  render(){
    return(
      <div>
        <a id="PageBody" />
        <div id="navbar-grid">
          <div><NavLink activeStyle={{ color: 'inherit', background: '#556070' }} to="/about" className="navbar-link"><Icon name='user' circular />About Me</NavLink></div>
          <div><NavLink activeStyle={{ color: 'inherit', background: '#556070' }} exact to="/" className="navbar-link"><Icon name='clipboard list' circular/>My Work</NavLink></div>
          <div>
            <span className="navbar-email"><Icon name='mail' circular />kadhirus99@gmail.com</span>
          </div>
          <div>
            <a className="navbar-link" href="https://www.linkedin.com/in/kadhirus99/" target="_blank" rel="noopener noreferrer">
              <Icon name='linkedin' circular/><span className="navbar-link-text">linkedin.com/in/kadhirus99</span>
            </a>
          </div>
          <div>
            <a className="navbar-link" href="https://github.com/kadhirumasankar" target="_blank" rel="noopener noreferrer">
            <Icon name='github' circular/><span className="navbar-link-text">github.com/kadhirumasankar</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
