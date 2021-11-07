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
          I’m currently an incoming first-year Aerospace Engineering Master's
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
          My interest in photography and videography, as well as my fascination
          with human behavior, initially drove me to work with object detection
          and recognition through deep learning. Through personal projects, work
          for student organizations, and work for the Autonomy for Hypersonics
          Drone Lab at{" "}
          <span style={{ color: "#00add0" }}>Sandia National Labs</span>, I have
          gained more experience with Python, C++, implementing machine learning
          algorithms, and controls. I will soon be contributing to reinforcement
          learning applications in aerospace as well.
        </p>
        <p>
          I made my first website from scratch when I was 9, and I’ve been
          building on web development skills ever since. I’m also interested in
          reinforcement learning applications in Aerospace, so you should be
          seeing some more projects related to that in my Work section soon.
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
                [<Icon name="mail" circular />, " kadhirus99@gmail.com"],
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
                [<Icon name="mail" circular />, " kadhirus99@gmail.com"],
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
