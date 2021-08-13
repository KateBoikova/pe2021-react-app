import React, { Component } from 'react';
import styles from './UserHW.css';

class UserHW extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: 'Wonder1',
      firstName: 'Cat',
      lastName: 'Cheshire',
      age: 100,
      imgSrc:
        'https://i.pinimg.com/originals/8d/34/f3/8d34f3056e8f7e9f3db0b45e3aa47ec9.jpg',
      likesCount: 0,
    };
  }

  incrementLikes = e => {
    const { likesCount } = this.state;
    this.setState({ likesCount: likesCount + 1 });
  };

  render () {
    const { firstName, lastName, age, imgSrc, likesCount } = this.state;
    return (
      <div className='main'>
        <img src={imgSrc} alt={'Cheshire'} />
        <div className='name'>
          {lastName} {firstName}
        </div>
        <div>{age}</div>
        <p>
          {lastName} {firstName} has {likesCount} likes
        </p>
        <div>
          <button title={'Add more likes'} onClick={this.incrementLikes}>
            +
          </button>
        </div>
      </div>
    );
  }
}
export default UserHW;
