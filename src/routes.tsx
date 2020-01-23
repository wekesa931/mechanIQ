import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavigationBar from "./containers/NavigationBar/NavigationBar";
import AuthModule from "./containers/authentication";
import Profile from "./containers/profile/Profile";
import Home from "./containers/Home/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/authenticate" component={AuthModule} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
