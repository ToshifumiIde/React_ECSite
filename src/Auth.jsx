import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenAuthState } from "./reducks/users/operations";
import { getIsSignedIn } from "./reducks/users/selectors";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, []);
  if (!isSignedIn) {
    return <></>;
  } else {
    return children;//Authの子要素(<Route exact path={"(/)?"} component={Home}> /)を返却
  }
};

export default Auth;
