import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/blog" component={() => <div></div>} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
