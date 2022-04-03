import React from "react";
import "./About.css";
import "../../PageHeader/PageHeader.css";
import img1 from "./img1.png";
import ProjectCard from "../Work/ProjectCard/ProjectCard";
import { Icon, Divider } from "semantic-ui-react";

export default class About extends React.Component {
  render() {
    const aboutText = (
      <div>
        <p>
          I’m currently a first-year Aerospace Engineering Master's
          student at the{" "}
          <span style={{ color: "#B3A369" }}>
            Georgia Institute of Technology
          </span>
          . I graduated with my Bachelor of Science degree in Aerospace
          Engineering with honors from{" "}
          <span style={{ color: "#bb5826" }}>
            University of Texas at Austin
          </span>
          , along with a minor in Business and a certificate in Computational
          Science.
        </p>
        <p>
          My interests are in autonomous GNC, robotics, and artificial intelligence applications in aerospace. As you can see in the "My Work" section, all of the work I've done in the past builds on these interests in some way. Through personal projects, work
          for student organizations, work for the Autonomy for Hypersonics
          Drone Lab at{" "}
          <span style={{ color: "#00add0" }}>Sandia National Labs</span>, and research with the <a style={{ color: "#bb5826" }} href="https://oden.utexas.edu/research/centers-and-groups/autonomous-systems-group/">Autonomous Systems Group</a> at UT Austin and the <a style={{ color: "#0384f7" }} href="https://core-robotics.gatech.edu/">CORE Robotics Lab</a> at Georgia Tech, I have
          gained more experience with Python, C++, MATLAB, ROS, Git, implementing machine learning
          algorithms, and controls.
        </p>
        <p>
          I made my first website from scratch when I was 9, and I’ve been
          building on web development skills ever since, and I built this website from scratch, as a continuation of those interests.
        </p>
        <p>
          If you’d like to chat with me, feel free to contact me through one of
          the channels below.
        </p>
      </div>
    );
    if (this.props.isMobile) {
      return (
        <div id="about-container">
          <div className="about-title">About Me</div>
          <div className="about-content">
            <div className="about-table">{aboutText}</div>
            <ProjectCard
              title="Contact Information"
              size="normal"
              date="Get in touch with me"
              details={[
                [<Icon name="mail" circular />, " kadhir.umasankar@gmail.com"],
                [
                  <Icon name="linkedin" circular />,
                  <a
                    href="https://www.linkedin.com/in/kadhirus99/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    /in/kadhirus99/
                  </a>,
                ],
              ]}
              noBullets={true}
            />
          </div>
          <Divider />
        </div>
      );
    } else {
      return (
        <div id="about-container">
          <div className="about-title">About Me</div>
          <div className="about-content">
            <div className="about-table">
              <div style={{ paddingRight: "5em" }}>{aboutText}</div>
              <img id="about-image" src={img1} alt="Kadhir Umasankar" /> <br />
            </div>
            <ProjectCard
              title="Contact Information"
              size="normal"
              date="Get in touch with me"
              details={[
                [<Icon name="mail" circular />, " kadhir.umasankar@gmail.com"],
                [
                  <Icon name="linkedin" circular />,
                  <a
                    href="https://www.linkedin.com/in/kadhirus99/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    /in/kadhirus99/
                  </a>,
                ],
              ]}
              noBullets={true}
            />
          </div>
        </div>
      );
    }
  }
}
