import React, { Component } from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './core/rootReducer';
import Landing from './components/Landing/Landing';

const dev = process.env.NODE_ENV === 'development';

const store = createStore(
  rootReducer,
  {},
  dev ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() :
    () => () => {}
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/blog" component={() => <div></div>} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
