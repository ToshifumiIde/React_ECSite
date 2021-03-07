import React from "react";
import { Switch, Route } from "react-router";
import { Home, Login } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      {/* <Route path="/posts/:id" component={Post} /> */}
      <Route exact path="(/)?" component={Home} />
      {/* ?をつけることで、/があってもなくても構わない形にすることができる */}
    </Switch>
  );
};
export default Router;
