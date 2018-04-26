import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../state/auth/reducer';

const url = 'https://www.facebook.com/v2.12/dialog/oauth?client_id=159008188111833&redirect_uri=https://privateblog.ru/api/auth/fb';

class Landing extends Component {
  render() {
    return (
      <a href={url} target='_blank'>fb</a>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login({type: 'fb'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
