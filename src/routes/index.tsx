import React from "react";
import { Switch, Route } from "react-router-dom";
import { Movies } from "../pages/Movies/Movies";
import { Television } from "../pages/Television/Television";

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Movies} />
    <Route exact path='/television' component={Television} />
  </Switch>
);
