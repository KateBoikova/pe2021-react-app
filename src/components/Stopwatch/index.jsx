import React, { Component } from 'react';
import styles from './Stopwatch.module.css';

class Stopwatch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      // isRunning: false;
    };
    this.timerId = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const newTime = new Date(state.time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };
  //  setInterval(tick, 1000);

  componentDidMount () {
    this.start();
  }

  componentWillUnmount () {
    this.stop();
  }

  componentDidUpdate (prevProps, prevState) {}

  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(this.tick, 1000);
      this.setState({ isRunning: true });
    }
  };

  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
    this.setState({ isRunning: false });
  };

  reset = () => {
    this.setState({ time: 0 });
  };

  render () {
    const { time, isRunning } = this.state;
    return (
      <article className={styles.container}>
        <div className={styles.classTime}>
          {time.toLocaleTimeString('en-GB')}
        </div>
        <button disabled={isRunning} onClick={this.start}>
          Start
        </button>
        <button disabled={!isRunning} onClick={this.stop}>
          Stop
        </button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}
export default Stopwatch;
