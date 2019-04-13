import { BrowserRouter } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';

import { shape } from 'prop-types';
const history = createMemoryHistory();

// Instantiate router context
const router = {
  history: history,
  route: {
    location: {},
    match: {},
  },
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) },
});

export function mountWrap(node) {
  return mount(node, createContext());
}

export function shallowWrap(node) {
  return shallow(node, createContext());
}