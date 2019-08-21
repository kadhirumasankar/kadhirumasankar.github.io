import React from 'react';
import './PageHeader.css';
import {Icon} from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import profilePicture from './ProfilePicture.png'
import kwwPicture from './kwwPicture.png'

export default class PageHeader extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      clickCount : 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    console.log(this.state.clickCount)
  }

  handleClick = () => {
    this.setState(prevState => {
       return {clickCount: prevState.clickCount + 1}
    })
    // useAlert().show('Oh look, an alert!')
    console.log(this.state.clickCount)
  }


  render(){
    return(
      <div id="header-container">
        <div>

        </div>
        <div id="header-text">
          <div>
            <img id="header-image" src={this.state.clickCount < 13 ? profilePicture : kwwPicture} alt="Kadhir Umasankar" onClick={this.handleClick}/><br />
            <div id="text">
              Hi, I&#39;m&nbsp;<b>Kadhir Umasankar</b>.<br />
              Aerospace Engineering student <b style={{color:"#bb5826"}}>@UTAustin</b>.
            </div>
          </div>
        </div>
        <a id="header-bottom-text" href="#PageBody">
          Scroll to see <Route exact path="/" render={() => <span>my work</span>} /><Route path="/about" render={() => <span>more about me</span>} /><br />
          <Icon name='caret down' />
        </a>
      </div>
    )
  }
}
