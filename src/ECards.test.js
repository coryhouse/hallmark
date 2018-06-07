import ECards from "./ECards";
import React from "react";
import { create } from "react-test-renderer";

describe("ECards", () => {
  it("should show no cards message when no cards exist", () => {
    // Act
    const tree = create(
      <ECards eCards={[]} onAddClick={jest.fn()} onDeleteClick={jest.fn()} />
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  it("should show cards table when cards exist", () => {
    // Act
    const tree = create(
      <ECards
        eCards={[{ sku: 1, name: "Cory, You're Amazing", category: "Truth." }]}
        onAddClick={jest.fn()}
        onDeleteClick={jest.fn()}
      />
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });
});
