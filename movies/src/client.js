import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './pages/index';
import configureStore from './modules/configureStore';

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

const test =(
  <div>test</div>
);

hydrate(test, document.getElementById('root'));