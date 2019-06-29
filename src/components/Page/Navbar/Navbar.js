import React from 'react';
import './Navbar.css';
import {Icon} from 'semantic-ui-react'

function Navbar() {
  return(
    <div>
    <a id="PageBody" />
    <div id="navbar-grid">
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

export default Navbar
