import React from 'react';
import './PageBody.css';
import projectData from './ProjectSection/projectData.json'
import ProjectSection from './ProjectSection/ProjectSection'

class PageBody extends React.Component {

  render(){
    return(
      <div id="page-body" name="PageBody">
        <ProjectSection info={projectData}/>
      </div>
    )
  }
}

export default PageBody
