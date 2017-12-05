import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import CustomAudiences from "./containers/CustomAudiences";
import ViewCreatives from "./containers/Creatives";
import NotFound from "./containers/404";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/audiences" exact component={CustomAudiences} />
    <Route path="/ads" exact component={ViewCreatives} />
    <Route component={NotFound} />
  </Switch>;