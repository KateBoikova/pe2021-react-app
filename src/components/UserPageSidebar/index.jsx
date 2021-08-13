import React from 'react';
import { withUser } from '../HOCs';
import { UserContext } from './../../contexts';
import styles from './UserPageSidebar.module.scss';

function UserPageSidebar (props) {
  const { user } = props;
  return (
    <div className={styles.sidebarContainer}>
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
      <img src={user.src} alt='user' />
    </div>
  );
}

export default withUser(UserPageSidebar);
