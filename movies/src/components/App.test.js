import React from "react";
import { render } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "../redux/reducers/reducer";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it('should render correctly in "debug" mode', () => {
    const location = {search: {searchInput: "test", searchType: "title"}};
    const mockStore = createStore(reducer);
    const component = render(
      <BrowserRouter>
      <div>
      <Provider store={mockStore}>
        <App debug location={location}/>
      </Provider>
      </div>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
