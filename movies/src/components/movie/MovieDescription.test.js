import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const description  = 'description';
  const tree = renderer
    .create(<div className="description">{description}</div>)
    .toJSON();
  expect(tree).toMatchSnapshot(description);
});
