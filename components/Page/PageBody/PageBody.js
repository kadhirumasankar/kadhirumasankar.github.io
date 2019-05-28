import React from 'react';
import './PageBody.css';
import Section from './Section/Section'

class PageBody extends React.Component {

  render(){
    return(
      <div id="page-body">
        <Section title="Education" />
        <Section title="Collegiate Activities" />
      </div>
    )
  }
}

export default PageBody
