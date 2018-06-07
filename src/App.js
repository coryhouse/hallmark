import React, { Fragment } from "react";
import ECards from "./ECards";
import Home from "./Home";
import Navigation from "./Navigation";
import ManageECard from "./ManageECard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "Home",
      newECard: {
        sku: "",
        name: "",
        category: ""
      }
    };
  }

  handleNavigationClick = event => {
    event.preventDefault();
    const newPage = event.target.pathname.replace("/", ""); // removing leading slash
    this.setState({ currentPage: newPage });
  };

  handleAddECardClick = event => {
    this.setState({ currentPage: "ManageECard" });
  };

  render() {
    return (
      <Fragment>
        <Navigation onLinkClick={this.handleNavigationClick} />
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "ECards" && (
          <ECards onAddECardClick={this.handleAddECardClick} />
        )}
        {this.state.currentPage === "ManageECard" && (
          <ManageECard eCard={this.state.newECard} />
        )}
      </Fragment>
    );
  }
}

export default App;
