import React from 'react';
import { render } from 'enzyme';
import App from './App';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = render(<App debug />);
  
    expect(component).toMatchSnapshot();
  });
});