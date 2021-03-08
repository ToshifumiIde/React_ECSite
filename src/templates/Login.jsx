import React from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";
// import { push } from "connected-react-router";
// import { signInAction } from "../reducks/users/actions";
import { signIn } from "../reducks/users/operations";

const Login = () => {
  const dispatch = useDispatch();
  // const selector = useSelector((state) => state);
  //selectorの情報を取得するにはuserSelector()メソッドにてstateを取得する必要がある
  // console.log(selector);
  return (
    <div>
      <h2>ログイン</h2>
      <button
        onClick={() => {
          // dispatch(signInAction({ uid: "0005", username: "torahack" }));
          // dispatch(push("/"));
          dispatch(signIn());
        }}
      >
        ログインする
      </button>
    </div>
  );
};

export default Login;
