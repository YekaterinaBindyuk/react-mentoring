import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const genres = ["Comedy", "Crime"].join(", ");
  const tree = renderer.create(<div className="genres">{genres}</div>).toJSON();
  expect(tree).toMatchSnapshot(genres);
});
