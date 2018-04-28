import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { getUserInfo } from './state/user/reducer';

class App extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Landing user={this.props.user} />} />
          <Route path="/blog" component={() => <div></div>} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
