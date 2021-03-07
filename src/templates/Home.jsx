import React from "react";
import { getUserId } from "../reducks/users/selectors";
import { useSelector } from "react-redux";

const Home = () => {
  //store全体のstateをselectorとして取得する
  const selector = useSelector((state) => state);
  //getUserIdにはstore全体のstateを渡す
  const uid = getUserId(selector);

  return (
    <>
      <h2>Home</h2>
      <p>{uid}</p>
      <button onClick={() => {}}>ログイン画面に移動</button>
    </>
  );
};

export default Home;
