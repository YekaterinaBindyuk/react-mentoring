import React from "react";
import { render, shallow } from "enzyme";
import { MOVIES_COUNT_TEXT } from "../../environment/const";

import SearchResultsCount from "./SearchResultsCount";
describe("SearchResults", () => {
  it('should render correctly in "debug" mode', () => {
    const component = render(<SearchResultsCount debug count={1} />);
    expect(component).toMatchSnapshot();
  });
});

it("renders movies count", () => {
  const count = 1;
  const wrapper = shallow(<SearchResultsCount count={count} />);
  expect(wrapper.html()).toEqual(
    '<div class="movies-count"><div class="badge badge-dark p-2"><i class="fa"></i><span>' +
      MOVIES_COUNT_TEXT +
      ' <span class="badge badge-light">' +
      count +
      "</span></span></div></div>"
  );
});
