import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    if (!isSignedIn) {
      const url = "https://api.github.com/users/deatiger";
      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);
      const username = response.login;
      console.log(response);
      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "torahack",
          username: username,
        })
      );
      dispatch(push("/")); //サインインした後はHomeに移動するpush()メソッドをdispatch()する
    }
  };
};
