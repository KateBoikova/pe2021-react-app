import React from 'react';
import PropTypes, { object } from 'prop-types';

function UserListItem(props) {
  const {
    user: { id, firstName, lastName, isSelected },
    onClickHandler,
  } = props;

  const liStyle = { backgroundColor: '#CCCCCC' };

  return (
    <li style={isSelected ? liStyle : null} onClick={onClickHandler}>
      ID: "{id}", Fullname: "{firstName} {lastName}"
    </li>
  );
}

export const usersPropStructure = PropTypes.shape({
  id: PropTypes.oneOfType(PropTypes.number, propTypes.string),
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  isSelected: PropTypes.bool,
})

UserListItem.propTypes = {
  user: userPropStructure.isRequired,
  onClickHandler: PropTypes.func,
};

export default UserListItem;