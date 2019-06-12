import React, {Component} from 'react'
import './ProjectCard.css'
import {Icon} from 'semantic-ui-react'

class ProjectCard extends React.Component{

  render(){
    const detailsList = this.props.details
    const details = detailsList.map((detail,i) => {
      return(<li key={i}>{detail}</li>)
    })
    const languageBackgroundColor = this.props.language[1]

    console.log(detailsList)
    return(
      <div id="card">
        <div id="card-header">
          <div id="card-title">
            {this.props.title}
          </div>
          <div id="card-header-details">
            <div id="card-header-language" style={{backgroundColor: languageBackgroundColor}}>
              {this.props.language[0]}
            </div>
            {this.props.githubUrl ? <a id="card-buttons" href={this.props.githubUrl} target="_blank"><Icon name='github' size="big"/></a> : null} 
          </div>
        </div>
        <div id="card-date">
          {this.props.date}
        </div>
        <div id="card-content">
          <div id="card-details">
            <ul>
              {details}
            </ul>
          </div>
          <img src={this.props.imageUrl} />
        </div>

      </div>
    )
  }
}

export default ProjectCard
