import React, { Component } from 'react';
import Stopwatch from '../Stopwatch';

class ComponentDisabler extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isHidden: true,
    };
  }
  //  hide = () => {
  //     const { isHidden } = this.state;
  //     this.setState({isHidden: false});
  //   }
  //   show = () => {
  //     this.setState({isHidden: true});
  //   }

  changeMode = () => {
    const { isHidden } = this.state;
    this.setState({ isHidden: !isHidden });
  };

  render () {
    const { isHidden } = this.state;
    return (
      <>
        <button onClick={this.changeMode}>{isHidden ? 'Show' : 'Hide'}</button>
        {/* {isHidden ? null : <Stopwatch/>} */}
        {!isHidden && <Stopwatch />}
      </>
    );
  }
}
export default ComponentDisabler;
