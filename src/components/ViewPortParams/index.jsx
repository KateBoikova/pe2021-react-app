import React, { Component } from 'react';

export default class ViewPortParams extends Component {
  constructor (props) {
    super(props);

    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ w: window.innerWidth, h: window.innerHeight });
  };

  render () {
    const { w, h } = this.state;
    return (
      <div>
        <p>ViewPortWidth: {w}</p>
        <p>ViewPortHeight: {h}</p>
      </div>
    );
  }
}
