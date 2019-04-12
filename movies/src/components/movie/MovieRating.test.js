import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const rating = 5;
  const tree = renderer
    .create(<div className="badge badge-pill badge-success">{rating}</div>)
    .toJSON();
  expect(tree).toMatchSnapshot(rating);
});
