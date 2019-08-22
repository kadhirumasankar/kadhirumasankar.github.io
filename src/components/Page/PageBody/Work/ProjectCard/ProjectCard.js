import React from 'react'
import './ProjectCard.css'
import {Icon} from 'semantic-ui-react'

class ProjectCard extends React.Component{

  render(){
    const detailsList = this.props.details
    let details = []
    if (detailsList){
      details = detailsList.map((detail,i) => {
        return(<li key={i}>{detail}</li>)
      })
    }
    let languageBackgroundColor = ''
    if (this.props.language){
      languageBackgroundColor = this.props.language[1]
    }
    let githubUrl = ''
    if (this.props.githubUrl){
      if (this.props.githubUrl === "private"){
        githubUrl = <a title="The code for this project is in a private repository" className="card-buttons" href={this.props.githubUrl} target="_blank" rel="noopener noreferrer"><Icon disabled name='github' size="big"/></a>
      }else{
        githubUrl = <a className="card-buttons" href={this.props.githubUrl} target="_blank" rel="noopener noreferrer"><Icon name='github' size="big"/></a>
      }
    }else{
      githubUrl = null
    }


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
              {this.props.language ? <div className="card-header-language" style={{backgroundColor: languageBackgroundColor}}>{this.props.language[0]}</div> : null}
              {githubUrl}
            </div>
          </div>
          {
            this.props.date ?
              <div className="card-date">
                {this.props.date}
              </div>
            :
              null
          }
          <div className="card-content">
            <div className="card-details">
              {this.props.additionalText ? <div style={{marginTop: "1em"}}>{this.props.additionalText}</div> : null}
              <ul {... this.props.noBullets ? {style: {listStyleType: 'none', paddingLeft: 0, marginLeft: 0, lineHeight:'250%'}} : null} >
                {details}
              </ul>
            </div>
            {this.props.imageUrl ?
              <div className="image-container">
                <img src={this.props.imageUrl} alt={this.props.title}/>
              </div>
            : null
          }
          </div>
        </div>
      )
    }
  }
}

export default ProjectCard
