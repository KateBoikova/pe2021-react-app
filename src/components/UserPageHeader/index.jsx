import React from 'react';
import { withUser } from '../HOCs';
import styles from './UserPageHeader.module.scss';

function UserPageHeader (props) {
  const { user } = props;
  return (
    <div className={styles.headerContainer}>
      <span>{user.firstName}</span>
      <img src={user.src} alt='user' />
    </div>
  );
}

export default withUser(UserPageHeader);
