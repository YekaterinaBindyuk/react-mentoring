import React from "react";
import App from "../pages/_app";
import { shallowWrap } from './test-helpers/ContextWrap';

describe("App", () => {
  it('should render correctly in "debug" mode', () => {

    const location = {search: {searchInput: "test", searchType: "title"}};
    const wrappedMount = () => shallowWrap(<App debug location={location} />);
    expect(wrappedMount).toMatchSnapshot();
  });
});
