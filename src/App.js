import React, { Fragment } from "react";
import ECards from "./ECards";
import Home from "./Home";
import Navigation from "./Navigation";
import ManageECard from "./ManageECard";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newECard: {
        sku: "",
        name: "",
        category: ""
      },
      user: {
        firstName: "Cory",
        lastname: "House"
      },
      eCards: [
        { sku: 1, name: "Cory, You're Amazing", category: "Truth." },
        { sku: 2, name: "Happy Birthday Nadia!!!!111", category: "Birthday" },
        { sku: 3, name: "Happy Father's Day!", category: "Fathers Day" }
      ],
      hasError: false
    };
  }

  componentDidMount() {
    console.log("MOUNTED!");
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  handleDeleteECardClick = (event, sku) => {
    const eCards = this.state.eCards.filter(eCard => eCard.sku !== sku);
    this.setState({ eCards });
  };

  handleSaveECard = (event, eCard) => {
    event.preventDefault(); // prevent the page reload.
    const eCards = [...this.state.eCards, eCard];
    this.setState({ eCards, currentPage: "ECards" });
  };

  render() {
    return (
      <Fragment>
        {this.state.firstName + " " + this.state.lastname}
        <Navigation />
        {this.state.hasError ? (
          <div>Whoops! 🔥</div>
        ) : (
          <Fragment>
            <Route path="/" component={Home} exact />
            <Route
              path="/ecards"
              render={() => (
                <ECards
                  eCards={this.state.eCards}
                  onDeleteClick={this.handleDeleteECardClick}
                />
              )}
            />
            <Route
              path="/manage"
              render={() => (
                <ManageECard
                  eCard={this.state.newECard}
                  onSubmit={this.handleSaveECard}
                />
              )}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
