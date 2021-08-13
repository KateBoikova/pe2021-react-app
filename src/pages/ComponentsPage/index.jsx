import React from 'react';
import { useRouterMatch } from 'react-router-dom';

function ComponentsPage () {
  const { path, url } = useRouterMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/aboutpage`}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default ComponentsPage;
