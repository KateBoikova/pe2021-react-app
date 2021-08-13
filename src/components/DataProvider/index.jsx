import React, { Component } from 'react';

class DataProvider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.setState({ isFetching: true });
    fetch(props.fileName)
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render () {
    const { data, isFetching, error } = this.state;
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {error && <div>Error!</div>}
        <ul>
          {data.map(u => (
            <li key={u.id}>
              <img src={u.src} />
              {u.firstName} {u.lastName}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default DataProvider;
