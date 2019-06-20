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
          <img id="header-image" src={profilePicture} alt="Kadhir Umasankar"/><br />
          <div id="text">
            Hi, I&#39;m&nbsp;<b>Kadhir Umasankar</b>.<br />
            Aerospace Engineering student <b style={{color:"#bb5826"}}>@UTAustin</b>.
          </div>
        </div>
      </div>
      <a id="header-bottom-text" href="#PageBody">
        Scroll to see my work<br />
        <Icon name='caret down' />
      </a>
    </div>
  )
}

export default PageHeader
