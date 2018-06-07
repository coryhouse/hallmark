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
      },
      eCards: [
        { sku: 1, name: "Cory, You're Amazing", category: "Truth." },
        { sku: 2, name: "Happy Birthday Nadia!!!!111", category: "Birthday" },
        { sku: 3, name: "Happy Father's Day!", category: "Fathers Day" }
      ]
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

  handleSaveECard = (event, eCard) => {
    event.preventDefault(); // prevent the page reload.
    const eCards = [...this.state.eCards, eCard];
    this.setState({ eCards, currentPage: "ECards" });
  };

  render() {
    return (
      <Fragment>
        <Navigation onLinkClick={this.handleNavigationClick} />
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "ECards" && (
          <ECards
            eCards={this.state.eCards}
            onAddECardClick={this.handleAddECardClick}
          />
        )}
        {this.state.currentPage === "ManageECard" && (
          <ManageECard
            eCard={this.state.newECard}
            onSubmit={this.handleSaveECard}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
