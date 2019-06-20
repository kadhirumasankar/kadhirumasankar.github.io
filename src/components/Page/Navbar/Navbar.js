import React from 'react';
import './Navbar.css';
import {Icon} from 'semantic-ui-react'

function Navbar() {
  return(
    <div>
    <a id="PageBody" />
    <div id="navbar-grid">
      <div>
        <span id="navbar-email"><Icon name='mail' circular />kadhirus99@gmail.com</span>
      </div>
      <div>
        <a id="navbar-link" href="https://www.linkedin.com/in/kadhirus99/" target="_blank" rel="noopener noreferrer">
          <Icon name='linkedin' circular/>linkedin.com/in/kadhirus99
        </a>
      </div>
      <div>
        <a id="navbar-link" href="https://github.com/kadhirumasankar" target="_blank" rel="noopener noreferrer">
          <Icon name='github' circular/>github.com/kadhirumasankar
        </a>
      </div>
    </div>
    </div>
  )
}

export default Navbar
