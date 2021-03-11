import React from "react";
import { Switch, Route } from "react-router";
import { Home, Login , SignUp, SignIn , Reset} from "./templates";
import Auth from "./Auth";
// import SignUp from "./templates/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact pass="/signin/reset" component={Reset} />
      {/* <Route path="/posts/:id" component={Post} /> */}
      <Auth>
      <Route exact path="(/)?" component={Home} />
      </Auth>
      {/* ?をつけることで、/があってもなくても構わない形にすることができる */}
    </Switch>
  );
};
export default Router;
