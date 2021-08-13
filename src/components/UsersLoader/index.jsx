import React, { Component } from 'react';
import { loadUsers } from '../../api';

class UsersLoader extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });

    loadUsers({ page: currentPage, seed: 'pe2021-1' })
      .then(data => {
        this.setState({ users: data.results });
      })
      .catch(error => {
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  loadPrevious = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  loadNext = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  render () {
    const { users, isError, isFetching } = this.state;

    return (
      <>
        {isError && <div>!!!Error!!!</div>}
        {isFetching && <div>Loading...</div>}
        <button onClick={this.loadPrevious}>{'<'}</button>
        <button onClick={this.loadNext}>{'>'}</button>

        <ul>
          {users.map((user, index) => (
            <li key={index}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </>
    );
  }
}
export default UsersLoader;
