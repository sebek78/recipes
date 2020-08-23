import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../Header";
import Menu from "../Menu";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import PageNotFound from "../PageNotFound";
import { checkUserAuthenticated } from "./actions";
import MainView from "./../MainView";
import SettingsPage from "./../SettingsPage";
const App = ({ authenticated, checkUserAuthenticated }) => {
  useEffect(() => {
    checkUserAuthenticated();
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <Switch>
        <Route path="/settings" component={SettingsPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={authenticated ? MainView : HomePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
};

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  checkUserAuthenticated: PropTypes.func.isRequired,
};

const mapStateToProps = ({ userReducer }) => ({
  authenticated: userReducer.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserAuthenticated: () => dispatch(checkUserAuthenticated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
