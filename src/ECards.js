import React from "react";
import PropTypes from "prop-types";

class ECards extends React.Component {
  render() {
    const eCards = [
      { sku: 1, name: "Cory, You're Amazing", category: "Truth." },
      { sku: 2, name: "Happy Birthday Nadia!!!!111", category: "Birthday" },
      { sku: 3, name: "Happy Father's Day!", category: "Fathers Day" }
    ];

    return (
      <React.Fragment>
        <button onClick={this.props.onAddECardClick}>Add eCard</button>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {eCards.map(card => {
              return (
                <tr key={card.sku}>
                  <td>{card.sku}</td>
                  <td>{card.name}</td>
                  <td>{card.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

ECards.propTypes = {
  onAddECardClick: PropTypes.func.isRequired
};

export default ECards;
