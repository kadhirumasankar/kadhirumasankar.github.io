import React from 'react';
import './About.css';
import img1 from './img1.jpg'
import img2 from './img2.png'
import ProjectCard from '../Work/ProjectCard/ProjectCard'
import { Icon } from 'semantic-ui-react'

export default class About extends React.Component {
  render(){
    return(
      <div id="about-container">
        <div className="about-title">
          About Me
        </div>
        <div className="about-text">
          <p>I’m currently a student at the University of Texas at Austin studying Aerospace Engineering. I was born in Fremont, CA, moved to India when I was 8, and moved to Frisco, TX when I was 14.</p>
          <img src={img1} /> <br />
          <img src={img2} />
          <ProjectCard title="Contact Information" size="normal" date="Get in touch with me" details={[[<Icon name='mail' circular />, ' kadhirus99@gmail.com'],[<Icon name='linkedin' circular />, <a href="https://www.linkedin.com/in/kadhirus99/" target="_blank"> /in/kadhirus99/</a>],[<Icon name='facebook' circular />, <a href="https://www.facebook.com/kadhir1999" target="_blank"> /kadhir1999</a>]]} noBullets={true}/>
        </div>
      </div>
    )
  }
}
