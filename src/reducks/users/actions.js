//action.typeの作成
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

//サインインのaction(typeとpayload(データの塊)のキーを含むオブジェクトを返却)
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role:userState.role,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

//サインアウトのaction(typeとpayloadのキーを含むオブジェクトを返却)
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
    },
  };
};
