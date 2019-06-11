import React from 'react';
import './Navbar.css';
import {Icon} from 'semantic-ui-react'

function Navbar() {
  return(
    <div id="navbar-grid">
      <div id="item">
        <span id="navbar-email"><Icon name='mail' circular  />kadhirus99@gmail.com</span>
      </div>
      <div>
        <a id="item" href="https://www.linkedin.com/in/kadhirus99/" target="_blank">
          <Icon name='linkedin' circular/>linkedin.com/in/kadhirus99
        </a>
      </div>
      <div id="item">
        <a href="https://github.com/kadhirumasankar" target="_blank">
          <Icon name='github' circular/>github.com/kadhirumasankar
        </a>
      </div>
    </div>
  )
}

export default Navbar
