import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const title  = 'title';
  const tree = renderer
    .create(<h3 className="title">{title}</h3>)
    .toJSON();
  expect(tree).toMatchSnapshot(title);
});
