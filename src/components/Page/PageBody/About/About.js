import React from "react"
import "./About.css"
import "../../PageHeader/PageHeader.css"
import img1 from "./img1.png"
import ProjectCard from "../Work/ProjectCard/ProjectCard"
import { Icon, Divider } from "semantic-ui-react"

export default class About extends React.Component {
  render() {
    const aboutText = (
      <div>
        <p>
          I’m currently a third-year Aerospace Engineering Honors student at the{" "}
          <span style={{ color: "#bb5826" }}>
            University of Texas at Austin
          </span>
          , and I will also be minoring in Business. My interest in photography
          and videography, as well as my love for the planet and nature, has
          driven me to concentrate on satellites and autonomy within Aerospace
          Engineering. I'm happy to share that I will be interning with the
          Austonomy New Mexico team at{" "}
          <span style={{ color: "#00add0" }}>Sandia National Labs</span> this
          summer.
        </p>
        <p>
          I made my first website from scratch when I was 9, and I’ve been
          building on web development skills ever since. I’m also interested in
          computer vision and machine learning, so you should be seeing some
          more projects related to that in my Work section soon.
        </p>
        <p>
          If you’d like to chat with me, feel free to email me at{" "}
          <span style={{ color: "#374457" }}>kadhirus99@gmail.com</span>.
        </p>
      </div>
    )
    if (this.props.isMobile) {
      return (
        <div id='about-container'>
          <div className='about-title'>About Me</div>
          <div className='about-content'>
            <div className='about-table'>{aboutText}</div>
            <ProjectCard
              title='Contact Information'
              size='normal'
              date='Get in touch with me'
              details={[
                [<Icon name='mail' circular />, " kadhirus99@gmail.com"],
                [
                  <Icon name='linkedin' circular />,
                  <a
                    href='https://www.linkedin.com/in/kadhirus99/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    /in/kadhirus99/
                  </a>
                ],
                [
                  <Icon name='facebook' circular />,
                  <a
                    href='https://www.facebook.com/kadhir1999'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    /kadhir1999
                  </a>
                ]
              ]}
              noBullets={true}
            />
          </div>
          <Divider />
        </div>
      )
    } else {
      return (
        <div id='about-container'>
          <div className='about-title'>About Me</div>
          <div className='about-content'>
            <div className='about-table'>
              <div style={{ paddingRight: "5em" }}>{aboutText}</div>
              <img id='header-image' src={img1} /> <br />
            </div>
            <ProjectCard
              title='Contact Information'
              size='normal'
              date='Get in touch with me'
              details={[
                [<Icon name='mail' circular />, " kadhirus99@gmail.com"],
                [
                  <Icon name='linkedin' circular />,
                  <a
                    href='https://www.linkedin.com/in/kadhirus99/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    /in/kadhirus99/
                  </a>
                ],
                [
                  <Icon name='facebook' circular />,
                  <a
                    href='https://www.facebook.com/kadhir1999'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    /kadhir1999
                  </a>
                ]
              ]}
              noBullets={true}
            />
          </div>
        </div>
      )
    }
  }
}
