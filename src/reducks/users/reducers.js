import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state, //...stateを記述しなかった場合、...action.payloadに記載のないkey(storeのフィールド)が消える
        //オブジェクトをmergeした状態で上書きする必要がある
        ...action.payload,
        //スプレッド構文を使わない場合、下記の通り面倒
        //isSignedIn:action.payload.isSignedIn,
        //uid:action.payload.uid,
        //username:action.payload.username,
      };
    default:
      return state;
  }
};
