import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
    };
  }

  increment = () => {
    const { counter, step } = this.state;
    this.setState({ counter: counter + step });
  };
  decrement = () => {
    const { counter, step } = this.state;
    this.setState({ counter: counter - step });
  };

  changeStep = e => {
    this.setState({ step: Number(e.target.value) });
  };
  render () {
    const { counter } = this.state;
    return (
      <>
        <div>{counter}</div>
        <button onClick={this.decrement}>+</button>
        <button onClick={this.increment}>-</button>
        <input type='range' value={step} onChange={this.changeStep} />
      </>
    );
  }
}
export default Counter;
