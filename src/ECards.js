import React from "react";
import PropTypes from "prop-types";

class ECards extends React.Component {
  render() {
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
            {this.props.eCards.map(card => {
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
  eCards: PropTypes.array.isRequired,
  onAddECardClick: PropTypes.func.isRequired
};

export default ECards;
