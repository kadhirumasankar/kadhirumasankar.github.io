import React from 'react';
import './PageBody.css';
import Section from './Section/Section'
import educationData from './Section/educationData.json'
import collegiateActivitiesData from './Section/collegiateActivitiesData.json'
import projectData from './ProjectSection/projectData.json'
import ProjectSection from './ProjectSection/ProjectSection'
import ProjectCard from './ProjectSection/ProjectCard/ProjectCard'

class PageBody extends React.Component {

  render(){
    return(
      <div id="page-body">
        <ProjectSection info={projectData}/>
        {/*<Section title="Education" info={educationData}/>
        <Section title="Collegiate Activities" info={collegiateActivitiesData}/>*/}
      </div>
    )
  }
}

export default PageBody
