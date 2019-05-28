import React from 'react';
import './Section.css';
import Subsection from './Subsection/Subsection'
import educationData from './educationData.json'

class Section extends React.Component {

  render(){
    const educationInfo = educationData.map((item) => {
      return (<Subsection name={item.name} date={item.date} details={item.details} key={item.key}/>)
    })
    return(
      <div id="section-container">
        <div id="section-header">{this.props.title.toUpperCase()}</div>
        <div id="subsection-container">
          {educationInfo}
        </div>
      </div>
    )
  }
}

export default Section
