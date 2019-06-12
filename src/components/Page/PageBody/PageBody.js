import React from 'react';
import './PageBody.css';
import projectData from './ProjectSection/projectData.json'
import ProjectSection from './ProjectSection/ProjectSection'

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
