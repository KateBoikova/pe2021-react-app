import React from 'react';


function NotFound(props) {
  const { history } = props;
  setTimeout(() => {
    history.push('/');
  }, 5000);
  return (
    <div>
      404
    </div>
  )
}

export default NotFound;
