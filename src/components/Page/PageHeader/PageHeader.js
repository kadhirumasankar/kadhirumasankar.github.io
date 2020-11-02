import React from "react"
import "./PageHeader.css"
import { Icon } from "semantic-ui-react"
import { Route } from "react-router-dom"
import profilePicture from "./ProfilePicture.png"
import kwwPicture from "./kwwPicture.png"

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState(prevState => {
      return { clickCount: prevState.clickCount + 1 }
    })
    console.log("You've clicked "+this.state.clickCount+" times")
    if (this.state.clickCount === 12) {
      console.log("A throwback to \"Kadhir's Wonderful Website\", the first website I made!")
    }
  }

  render() {
    return (
      <div id='header-container'>
        <div></div>
        <div id='header-text'>
          <div>
            <img
              id='header-image'
              src={this.state.clickCount < 13 ? profilePicture : kwwPicture}
              alt='Kadhir Umasankar'
              onClick={this.handleClick}
            />
            <br />
            <div id='text'>
              Hi, I&#39;m&nbsp;<b>Kadhir Umasankar</b>.<br />
              <div style={{ fontSize: "90%" }}>
                Aerospace Engineering student{" "}
                <a
                  href='https://www.utexas.edu/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: "#bb5826", fontWeight: "bold" }}
                >
                  @UTAustin
                </a>
                .<br />
                Interning{" "}
                <a
                  href='https://www.sandia.gov/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: "#00add0", fontWeight: "bold" }}
                >
                  @SandiaNationalLabs
                </a>
                .<br />
              </div>
            </div>
          </div>
        </div>
        <a id='header-bottom-text' href='#PageBody'>
          Scroll to see{" "}
          <Route exact path='/' render={() => <span>my work</span>} />
          <Route path='/about' render={() => <span>more about me</span>} />
          <br />
          <Icon name='caret down' />
        </a>
      </div>
    )
  }
}
