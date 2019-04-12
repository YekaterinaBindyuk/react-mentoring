import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const releaseDate = "01.01.2000";
  const duration = 180;
  const timeUnit = "min";
  const durationToRender = duration + " " + timeUnit;
  const tree = renderer
    .create(
      <div>
        <span className="mr-5">Release date: {releaseDate}</span>
        <span className="ml-5 badge badge-pill badge-dark">
          {durationToRender}
        </span>
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot(releaseDate, duration);
});
