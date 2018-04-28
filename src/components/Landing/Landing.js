import React, { Component } from "react";
import { connect } from "react-redux";

const url =
  "https://www.facebook.com/v2.12/dialog/oauth?client_id=159008188111833&redirect_uri=https://privateblog.ru/api/auth/fb";

const Header = ({ userName, status }) =>
  userName ? (
    <span>{userName}</span>
  ) : status === "pending" ? (
    <div />
  ) : (
    <a href={url} target="_blank">
      Login from facebook
    </a>
  );

class Landing extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header userName={user.data.name} status={user.state} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
