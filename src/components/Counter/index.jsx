import React, { Component } from 'react';






class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
    };
    // this.increment = this.increment.bind(this);
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
    const { counter, step } = this.state;

    return (
      <>
        <div>{counter}</div>
        <input type='number' value={step} onChange={this.changeStep} />
        <br />
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
