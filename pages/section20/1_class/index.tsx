import Router from "next/router";
import { Component } from "react";

export default class Quiz20Num1 extends Component {
  state = {
    isChange: false,
  };

  onClickChange = (): void => {
    this.setState({
      isChange: true,
    });
    console.log(this.state.isChange);
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  componentDidMount(): void {
    console.log("Rendered!");
  }

  componentDidUpdate(): void {
    console.log("Changed!!");
  }

  render(): JSX.Element {
    return (
      <>
        <button onClick={this.onClickChange}>변경</button>
        <button onClick={this.onClickMove}>이동</button>
      </>
    );
  }
}
