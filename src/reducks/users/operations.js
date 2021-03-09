import { signInAction } from "./actions";
import { push } from "connected-react-router";
import { auth, db, firebaseTimestamp } from "../../Firebase/index";

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

export const SignUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    //Validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください");
      return false;
    }
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = firebaseTimestamp.now();
          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: username,
          };
          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(dispatch(push("/")));
        }
      });
  };
};