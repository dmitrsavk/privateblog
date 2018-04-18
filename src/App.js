import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/blog" component={() => <div></div>} />
      </div>
    );
  }
}

export default App;
