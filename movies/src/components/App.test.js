import React from 'react';
import { render } from 'enzyme';
import App from './App';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducer from '../redux/reducers/reducer';
import { createStore } from 'redux';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const mockStore = createStore(reducer);
    const component = render(<Provider store={mockStore}>
      <App debug/></Provider>);
  
    expect(component).toMatchSnapshot();
  });
});