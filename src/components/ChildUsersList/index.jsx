import React, { Component } from 'react';
import UserListItem from './UserListItem';
import PropTypes from 'prop-types';

function ChildUsersList (props) {
  const { users, setUsers } = props;
  const mapUser = (user, index) => {
    const onClickHandler = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({ users: newUsers });
      setUsers(newUsers);
    };

    return (
      <UserListItem key={user.id} user={user} onClickHandler={onClickHandler} />
    );
  };

  ChildUsersList.propTypes = {
    users: PropTypes.arrayOf(usersPropStructure).isRequired,
    setUsers: PropTypes.func,
  };
  //UserListItem({user:user})

  // render() {
  //   const { users } = this.state;
  //   return (
  //     <>
  //       <button onClick={this.sortUsers}>Sort</button>
  //       <ul>{users.map(mapUser)}</ul>
  //     </>
  //   );
  // }
}

export default ChildUsersList;
