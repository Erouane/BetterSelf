import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LandingScreen } from "../screens/landingScreen";
import { Routes } from "./routes";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={Routes.LANDING} />
      </Route>
      <Route path={Routes.LANDING}>
        <LandingScreen />
      </Route>
    </Switch>
  );
};
