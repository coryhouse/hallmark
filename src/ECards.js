import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ECards extends React.Component {
  renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.props.eCards.map(card => {
            return (
              <tr key={card.sku}>
                <td>
                  <button
                    onClick={event => this.props.onDeleteClick(event, card.sku)}
                  >
                    Delete
                  </button>
                </td>
                <td>{card.sku}</td>
                <td>{card.name}</td>
                <td>{card.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/manage">Add eCard</Link>
        {this.props.eCards.length === 0 ? (
          <div>
            No Cards{" "}
            <span role="img" aria-label="meh">
              😜
            </span>
          </div>
        ) : (
          this.renderTable()
        )}
      </React.Fragment>
    );
  }
}

ECards.propTypes = {
  eCards: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ECards;
