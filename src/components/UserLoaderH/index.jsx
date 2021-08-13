import React, { useState, useEffect } from 'react';
import { loadUsers } from '../../api';

function UserLoaderH () {
  const [users, setUsers] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const load = () => {
    setIsFetching(true);

    loadUsers({ page: currentPage, seed: 'pe2021-1' })
      .then(data => {
        setUsers(data.results);
      })
      .catch(error => {
        setIsError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    load();
  }, [currentPage]);

  const loadPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const loadNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {isError && <div>!!!Error!!!</div>}
      {isFetching && <div>Loading...</div>}
      <button onClick={loadPrevious}>{'<'}</button>
      <button onClick={loadNext}>{'>'}</button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </>
  );
}

export default UserLoaderH;

// loadPrevious = () => {
//   const { currentPage } = this.state;
//   if (currentPage > 1) {
//     this.setState({ currentPage: currentPage - 1 });
//   }
// };

// loadNext = () => {
//   const { currentPage } = this.state;
//   this.setState({ currentPage: currentPage + 1 });
// };

//   render () {

//     return (

//     );
//   }
// }
// export default UsersLoader;
