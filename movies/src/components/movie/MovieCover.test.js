import React from "react";
import renderer from "react-test-renderer";
import { BASE_IMG_CLASSNAME } from "../../environment/const";

it("renders correctly", () => {
  const title = "test title";
  const type = "small";
  const url = "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg";

  const tree = renderer
    .create(
      <img src={url} alt={title} className={`${BASE_IMG_CLASSNAME}_${type}`} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot(title, url, type);
});
