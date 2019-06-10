import React from 'react';
import './Navbar.css';
import {Icon} from 'semantic-ui-react'

function Navbar() {
  return(
    <div id="navbar-grid">
      <div>
        <Icon name='mail' />kadhirus99@gmail.com
      </div>
      <div id="navbar-link-1">
        <a href="https://www.linkedin.com/in/kadhirus99/" target="_blank">
          <Icon name='linkedin' />linkedin.com/in/kadhirus99
        </a>
      </div>
      <div>
        <a href="https://github.com/kadhirumasankar" target="_blank">
          <Icon name='github' />github.com/kadhirumasankar
        </a>
      </div>
    </div>
  )
}

export default Navbar
