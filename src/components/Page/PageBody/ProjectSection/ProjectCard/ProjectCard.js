import React from 'react'
import './ProjectCard.css'
import {Icon} from 'semantic-ui-react'

class ProjectCard extends React.Component{

  render(){
    const detailsList = this.props.details
    const details = detailsList.map((detail,i) => {
      return(<li key={i}>{detail}</li>)
    })
    const languageBackgroundColor = this.props.language[1]

    if(this.props.size==='small'){
      return(
        <div className="card small">
          <div className="card-header">
            <div className="card-title">
              {this.props.title}
            </div>
            <div className="card-header-details">
              <div className="card-header-language" style={{backgroundColor: languageBackgroundColor}}>
                {this.props.language[0]}
              </div>
              {this.props.githubUrl ? <a className="card-buttons" href={this.props.githubUrl} target="_blank" rel="noopener noreferrer"><Icon name='github' size="big"/></a> : null}
            </div>
          </div>
          <div className="card-date">
            {this.props.date}
          </div>
          <div className="card-content">
            <div className="card-details">
              {this.props.additionalText ? <div style={{marginTop: "1em"}}>{this.props.additionalText}</div> : null}
              <ul>
                {details}
              </ul>
            </div>
            <div className="image-container">
              <img src={this.props.imageUrl} alt={this.props.title}/>
            </div>
          </div>
        </div>
      )
    }else if (this.props.size==='normal') {
      return(
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              {this.props.title}
            </div>
            <div className="card-header-details">
              <div className="card-header-language" style={{backgroundColor: languageBackgroundColor}}>
                {this.props.language[0]}
              </div>
              {this.props.githubUrl ? <a className="card-buttons" href={this.props.githubUrl} target="_blank" rel="noopener noreferrer"><Icon name='github' size="big"/></a> : null}
            </div>
          </div>
          <div className="card-date">
            {this.props.date}
          </div>
          <div className="card-content">
            <div className="card-details">
              {this.props.additionalText ? <div style={{marginTop: "1em"}}>{this.props.additionalText}</div> : null}
              <ul>
                {details}
              </ul>
            </div>
            <div className="image-container">
              <img src={this.props.imageUrl} alt={this.props.title}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ProjectCard
