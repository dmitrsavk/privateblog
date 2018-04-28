import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
