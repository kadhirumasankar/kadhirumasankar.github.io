import React from 'react';
import './Work.css';
import ProjectCard from './ProjectCard/ProjectCard'
import projectData from './projectData.json'

export default class Work extends React.Component {

  render(){
    return(
      <div id="projects">
        {
          projectData.map((data) => {
          return (<ProjectCard key={data.key} size={data.size} title={data.title} date={data.date} language={data.language} imageUrl={data.imageUrl} details={data.details} githubUrl={data.githubUrl} additionalText={data.additionalText}/>)
          })
        }
      </div>
    )
  }
}
