import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../Header";
import Menu from "../Menu";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import PageNotFound from "../PageNotFound";
import api from "./../../utils/api";

const App = ({ authenticated }) => {
  const [status, setStatus] = useState({
    authenticated: false,
    username: undefined,
  });
  useEffect(() => {
    console.log(authenticated);
    api.get("/authenticated").then((data) => {
      setStatus({
        authenticated: data.authenticated,
        username: data.username,
      });
    });
  }, []);

  return (
    <>
      <Header status={status} setStatus={setStatus} />
      <Menu authenticated={status.authenticated} />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
};

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ userReducer }) => ({
  authenticated: userReducer.authenticated,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
