import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../core/rootReducer';

class Landing extends Component {
  render() {
    return (
      <button onClick={this.props.login}>login</button>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
