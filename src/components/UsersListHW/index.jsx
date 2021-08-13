import React, { Component } from 'react';
import UsersListItemHW from '../UsersListItemHW';

const usersDB = [
  {
    id: 'wonder1',
    firstName: 'Alice',
    lastName: 'Little',
    age: 5,
    imgSrc:
      'https://i.pinimg.com/originals/4e/76/46/4e764661a4d9d466eaaa341dc77b21a6.jpg',
  },
  {
    id: 'wonder2',
    firstName: 'Rabbit',
    lastName: 'White',
    age: 1,
    imgSrc:
      'https://i.pinimg.com/originals/ed/07/01/ed0701750e7890be61470a86c49b0bca.jpg',
  },
  {
    id: 'wonder3',
    firstName: 'Queen',
    lastName: 'White',
    age: 30,
    imgSrc:
      'https://i2.wp.com/www.devon-cornwall-film.co.uk/wp-content/uploads/2010/05/mp0480_comp_v7_hd_vd8-1.106.gif?fit=750%2C423&ssl=1',
  },
  {
    id: 'wonder4',
    firstName: 'Queen',
    lastName: 'Red',
    age: 40,
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Red_Queen_-_Alice_in_Wonderland_%282010_film%29.png/200px-Red_Queen_-_Alice_in_Wonderland_%282010_film%29.png',
  },
  {
    id: 'wonder5',
    firstName: 'Hatter',
    lastName: 'Mad',
    age: 35,
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/1200x675/p06vvmvc.jpg',
  },
  {
    id: 'wonder6',
    firstName: 'Cat',
    lastName: 'Cheshire',
    age: 100,
    imgSrc:
      'https://i.pinimg.com/originals/f3/f0/d2/f3f0d2c0ddfb6960c4f9190859e96437.jpg',
  },
  {
    id: 'wonder7',
    firstName: 'Hare',
    lastName: 'March',
    age: 50,
    imgSrc:
      'https://i2.wp.com/www.heyuguys.com/images/2009/12/march_hare-550x440.jpg?ssl=1',
  },
];

class UsersListHW extends Component {
  constructor (props) {
    super(props);
    const users = usersDB.map(user => ({ ...user, isSelected: false }));
    this.state = {
      users,
    };
  }

  deleteUser = index => {
    const { users } = this.state;
    const copyUsers = [...users];
    copyUsers.splice(index, 1);
    this.setState({ users: copyUsers });
  };

  selectUser = index => {
    const { users } = this.state;
    const copyUsers = [...users];
    copyUsers[index].isSelected = !copyUsers[index].isSelected;
    this.setState({ users: copyUsers });
  };

  render () {
    const { users } = this.state;
    const items = users.map((user, index) => (
      <UsersListItemHW
        key={user.id}
        {...user}
        deleteUser={() => this.deleteUser(index)}
        selectUser={() => this.selectUser(index)}
      />
    ));

    return <ul>{items}</ul>;
  }
}

export default UsersListHW;
