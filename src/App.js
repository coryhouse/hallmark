import React, { Fragment } from "react";
import ECards from "./ECards";
import Home from "./Home";
import Navigation from "./Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "Home"
    };

    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  handleNavigationClick(event) {
    event.preventDefault();
    const newPage = event.target.pathname.split("/")[1];
    this.setState({ currentPage: newPage });
  }

  render() {
    return (
      <Fragment>
        <Navigation onLinkClick={this.handleNavigationClick} />
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "ECards" && <ECards />}
      </Fragment>
    );
  }
}

export default App;
