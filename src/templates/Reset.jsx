import React, { useState, useCallback } from "react";
import { resetPassword } from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import { TextInput, PrimaryButton } from "../components/UIkit";
import {push} from "connected-react-router";

const Reset = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  return (
    <div className={"c-section-container"}>
      <h2 className="u-text__headline u-text-center">パスワードのリセット</h2>
      <div className="module-spacer--medium" />
      <TextInput
        label={"メールアドレス"}
        value={email}
        onChange={inputEmail}
        type={"email"}
        fullWidth={true}
        rows={1}
        multiline={true}
        required={true}
      />
      <div className="module-spacer--medium" />
      <div className={"center"}>
        <PrimaryButton
          label={"パスワードをリセット"}
          onClick={() => dispatch(resetPassword(email))}
        />
        <div className="module-spacer--medium" />
        <p
          onClick={() => {
            dispatch(push("/signin"));
          }}
        >
          ログイン画面に戻る
        </p>
      </div>
    </div>
  );
};

export default Reset;
