import React, { Component } from "react";
import { connect } from "react-redux";

import { logout } from '../../state/user/reducer';

const url =
  "https://www.facebook.com/v2.12/dialog/oauth?client_id=159008188111833&redirect_uri=https://privateblog.ru/api/auth/fb";

const Header = ({ userName, status, onLogout }) =>
  userName ? (
    <div>
      <span>{userName}</span>
      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  ) : status === "pending" ? (
    <div />
  ) : (
    <a href={url}>
      Login from facebook
    </a>
  );

class Landing extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header userName={user.data.name} status={user.state} onLogout={this.props.logout}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
