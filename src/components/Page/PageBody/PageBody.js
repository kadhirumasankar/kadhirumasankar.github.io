import React from 'react';
import { Route } from 'react-router-dom'

import './PageBody.css';
import projectData from './Work/projectData.json'
import Work from './Work/Work'
import About from './About/About'

class PageBody extends React.Component {

  render(){
    return(
      <div id="page-body" name="PageBody">
        <Route path="/" exact component={Work} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}

export default PageBody
