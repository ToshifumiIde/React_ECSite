import React from "react";
import { getUserId } from "../reducks/users/selectors";
import { getUserName } from "../reducks/users/selectors";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";

const Home = () => {
  //store全体のstateをselectorとして取得する
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  //getUserIdにはstore全体のstateを渡す
  const uid = getUserId(selector);
  const username = getUserName(selector);
  return (
    <>
      <h2>Home</h2>
      <p>ユーザーID：{uid}</p>
      <p>ユーザー名：{username}</p>
      <button onClick={() => dispatch(signOut())}>サインアウト</button>
    </>
  );
};

export default Home;
