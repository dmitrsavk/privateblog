import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import { getUserInfo, logout } from "./state/user/reducer";
// import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import { withRouter } from "react-router";
import styled from "styled-components";
import Privacy from './components/Privacy/Privacy';

// import back from './components/Blog/background-blog.jpg';

const Wrap = styled.div`
  min-height: 100vh;
  background-color: #F1F1F1;
`;

const Progres = () => <Wrap />;

class App extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        {/* <Header user={this.props.user} onLogout={this.props.logout} /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              user.status === "success" && user.data.name ? (
                <Redirect to="/blog" />
              ) : user.status === "initial" || user.status === "pending" ? (
                <Progres />
              ) : (
                <Landing />
              )
            }
          />
          <Route
            path="/blog"
            render={() =>
              user.status === "success" && !user.data.name ? (
                <Redirect to="/" />
              ) : user.status === "initial" || user.status === "pending" ? (
                <Progres />
              ) : (
                <Blog />
              )
            }
          />
          <Route
            path="/privacy"
            render={() => <Privacy />}
          />
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
  getUserInfo: () => dispatch(getUserInfo()),
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
