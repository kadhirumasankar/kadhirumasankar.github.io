import React from 'react';
import './PageHeader.css';
import {Icon} from 'semantic-ui-react'
import profilePicture from './ProfilePicture.png'

function PageHeader() {
  return(
    <div id="header-container">
      <div>

      </div>
      <div id="header-text">
        <div>
          <img id="header-image" src={profilePicture} /><br />
          <div id="text">
            Hi, I&#39;m&nbsp;<b>Kadhir Umasankar</b>.<br />
            ASE student <b style={{color:"#bb5826"}}>@UTAustin</b>.
          </div>
        </div>
      </div>
      <div id="header-bottom-text">
        Scroll to see my work<br />
        <Icon name='caret down' />
      </div>
    </div>
  )
}

export default PageHeader
