import React from "react";
import { Switch, Route } from "react-router";
import { Home, Login , SignUp, SignIn } from "./templates";
// import SignUp from "./templates/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      {/* <Route path="/posts/:id" component={Post} /> */}
      <Route exact path="(/)?" component={Home} />
      {/* ?をつけることで、/があってもなくても構わない形にすることができる */}
    </Switch>
  );
};
export default Router;
