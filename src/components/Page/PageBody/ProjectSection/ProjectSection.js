import React from 'react';
import './ProjectSection.css';
import ProjectCard from './ProjectCard/ProjectCard'

class ProjectSection extends React.Component {

  render(){

    const projects = this.props.info.map((data) => {
      return (<ProjectCard key={data.key} size={data.size} title={data.title} date={data.date} language={data.language} imageUrl={data.imageUrl} details={data.details} githubUrl={data.githubUrl} additionalText={data.additionalText}/>)
    })

    return(
      <div id="projects">
        {projects}
      </div>
    )
  }
}

export default ProjectSection
