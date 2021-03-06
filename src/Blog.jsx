import React from "react";
import { Article } from "./Article";
// import { Foo, Bar } from "./components/FooBar";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

const Blog = () => {
  //イベントリスナの設定などに使われる
  // componentDidMount() {
  //   document.getElementById("counter").addEventListener("click", () => {
  //     this.countUp();
  //   });
  // }

  // componentDidUpdate() {
  //   if (this.state.count >= 10) {
  //     this.setState({ count: 0 });
  //   }
  // }

  // //リスナーを開放し、サーバーの負荷を減らす
  // componentWillUnmount() {
  //   document
  //     .getElementById("counter")
  //     .removeEventListener("click", this.countUp);
  // }

  // togglePublished = () => {
  //   this.setState({
  //     isPublished: !this.state.isPublished,
  //   });
  // };

  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };
  return (
    <Article>
      <Article
        title={"Reactの使い方"}
        // isPublished={this.state.isPublished}
        // toggle={() => {
        //   this.togglePublished();
        // }}
        // count={this.state.count}
      />
      {/* <Foo /> */}
      <FooBar.Foo />
      <FooBar.Bar />
      {/* <Bar /> */}
      <Hoge />
    </Article>
  );
};

export default Blog;
