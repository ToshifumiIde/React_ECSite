import React, { useState, useCallback } from "react";
import { signIn } from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import { TextInput, PrimaryButton } from "../components/UIkit";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  return (
    <div className={"c-section-container"}>
      <h2 className="u-text__headline u-text-center">サインイン</h2>
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
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <div className="module-spacer--medium" />
      <div className={"center"}>
        <PrimaryButton
          label={"サインイン"}
          onClick={() => dispatch(signIn(email, password))}
        />
      </div>
    </div>
  );
};

export default SignIn;
