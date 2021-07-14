import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  const { name, isGreeting } = props;
  return (
    <div>
      {isGreeting ? 'Hello' : 'Good bye'} {name}
    </div>
  )
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  isGreeting: PropTypes.bool.isRequired,
};

Greeting.defaultProps = {
  isGreeting: true,
};

export default Greeting;
