import React from 'react';
import './PageHeader.css';
import {Icon} from 'semantic-ui-react'

function PageHeader() {
  return(
    <div id="header-container">
      <div>
        
      </div>
      <div id="header-text">
        <div>
          <img id="header-image" src="https://lh3.googleusercontent.com/sCTXfyQa_rVvfutbHIMa_-yEaanhCKka6zgrR5Ww2AMl0rbfniHA2rQtZwj9yG4kwopcVDk-TEFjkPzjTdt_JgpNCaS5Jp3SPpbadTP-JJ7Tfj8CNMAQMnczh_7EUPtufkLUDwnfxg0nDPru4kRc18OSwjbnxkBFmzEEYRBwjQ4ipsytJqPOZHqe8Ow5WK77ZOATotT0L2zu4DyPsfuEZRS_xBntyWAbaoRwhzrv9OqI4j0Q1aduMo56HXHfl65TBbcjCHkI_c5XTRAyECZAlYLJirPxTsjT7UqiVU1s4uCZ13fDnR7YOzuw4tRFdMhn5m5jsey3l0P0OzjJLkPBJDB508vzhsC6dyjqu88zXvkVmv5Ehcv0LmWE3eY5pYbKqIdqVjpMu3two9SV8OvJ-qOYIEO6xDTOOQS_o6eDUJEXsVytB9gGYYUgBM9wm9BIY1n8oclNfbGpJFRr7P3bSf7UvNQ16PVshuFEEY6faVizJwnF45bilUPUeijVrq-x3i9dS3IyNUiSCqOqrufOguziE-dnZIobEiPQ_L8jPe7PBJdYxeaXMhSJO_6D9f76wWxnwe9egfJ7OS19dHrOeoEj1x7QBin1bCNGP1Q8feWrK1JboD10OWLzY8-BfwH__Ow-lMvNO7hadIe1ThQNP5zjA8cq0vhl=s739-no" /><br />
          Hi, I&#39;m&nbsp;<b>Kadhir Umasankar</b>.<br />
          ASE student <b style={{color:"#bb5826"}}>@UTAustin</b>.
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
