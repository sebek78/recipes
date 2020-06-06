import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header";
import Menu from "../Menu";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import PageNotFound from "../PageNotFound";
import api from "./../../utils/api";

const App = () => {
  const [status, setStatus] = useState({
    authenticated: false,
    username: undefined,
  });
  useEffect(() => {
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

export default App;
