import React, { useState, useEffect } from 'react';
import { loadUsers } from '../../api';
import { useData } from '../../hooks';
// переписать с использованием хуков состояния и эффекта
function UsersLoaderWithCustomHook () {
  const { data: users, isFetching, isError } = useData(loadUsers);
  return (
    <>
      {isError && <div>!!!ERROR!!!</div>}
      {isFetching && <div>Loading...</div>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersLoaderWithCustomHook;
