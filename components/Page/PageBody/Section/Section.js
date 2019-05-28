import React from 'react';
import './Section.css';
import Subsection from './Subsection/Subsection'

class Section extends React.Component {

  render(){

    const sectionDetails = this.props.info.map((detail) => {
      return (<Subsection name={detail.name} date={detail.date} details={detail.details}/>)
    })

    return(
      <div id="section-container">
        <div id="section-header">{this.props.title.toUpperCase()}</div>
        <div id="subsection-container">
          {sectionDetails}
        </div>
      </div>
    )
  }
}

export default Section
