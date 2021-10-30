import React from "react";
import { Switch, Route } from "react-router-dom";
import { Movies } from "../pages/Movies/Movies";
import { Series } from "../pages/Series/Series";

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Series} />
    <Route exact path='/Movies' component={Movies} />
  </Switch>
);
