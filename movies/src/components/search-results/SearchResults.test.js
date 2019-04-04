import React from 'react';
import { render, mount } from 'enzyme';
import { NO_FILMS_WARNING } from "../../environment/const";

import { SearchResults } from './SearchResults';
describe('SearchResults', () => {
  it('should render correctly in "debug" mode', () => {
    const component = render(<SearchResults debug moviesList={[]}/>);
    expect(component).toMatchSnapshot();
  });
});

it("renders no films warning in case of absense of films", () => {
  const mockGetMoviesfn = jest.fn();
  const wrapper = mount(
    <SearchResults moviesList={[]} getMovies={mockGetMoviesfn}/>
  );
  expect(wrapper.html()).toEqual("<main><div>" + NO_FILMS_WARNING + "</div></main>"
    );
});

