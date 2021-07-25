import React from "react";
import { Route } from "react-router-dom";

import "./PageBody.css";
import Work from "./Work/Work";
import About from "./About/About";

export default class PageBody extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1100;

    if (isMobile) {
      return (
        <div id="page-body" name="PageBody">
          <About isMobile={isMobile} />
          <Work />
        </div>
      );
    } else {
      return (
        <div id="page-body" name="PageBody">
          <Route path="/" exact component={Work} />
          <Route path="/about" component={About} />
        </div>
      );
    }
  }
}
