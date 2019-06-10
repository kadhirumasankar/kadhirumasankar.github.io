import React from 'react';
import './Subsection.css';
import {Icon} from 'semantic-ui-react'

class Subsection extends React.Component {

  render(){
    const educationDetails = this.props.details.map((detail) => {
      return (<div>{detail}</div>)
    })
    return(
      <div id="subsection-grid">
        <div id="subsection-start"><Icon name="minus" size="small"/></div>
        <div id="subsection-heading"><span id="subsection-heading-name">{this.props.name}</span> <span id="subsection-heading-date">{this.props.date}</span></div>
        <div id="subsection-details">
          {educationDetails}
        </div>
      </div>
    )
  }
}

export default Subsection
