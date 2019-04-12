import React from "react";
import { render } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "../redux/reducers/reducer";
import { createStore } from "redux";

describe("App", () => {
  it('should render correctly in "debug" mode', () => {
    const location = {search: {searchInput: "test", searchType: "title"}};
    const mockStore = createStore(reducer);
    const component = render(
      <Provider store={mockStore}>
        <App debug location={location}/>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
