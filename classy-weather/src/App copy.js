import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDecrement = this.handleDEcrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDEcrement() {
    this.setState((curstate) => {
      return { count: curstate.cont - 1 };
    });
  }
  handleIncrement() {
    this.setState((curstate) => {
      return { count: curstate.cont + 1 };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleDEcrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;
