import React, { Component } from "react";

export default class LoginClass extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div className="">
        <h2>ログイン</h2>
        <button
          onClick={() => {
            this.props.actions.signIn();
          }}
        >
          ログイン
        </button>
      </div>
    );
  }
}
