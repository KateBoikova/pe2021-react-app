import React from 'react';
import styles from './../../components/RoutingBase/RoutingBase.module.scss';

function ContactsPage () {
  return (
    <div>
      <h2 className={styles.pageHeader}>Contacts</h2>

      <p>
        <span className={styles.emphasize}>Call us:</span> 000 111 22 33
      </p>
      <img
        src='https://i.pinimg.com/originals/3a/5e/17/3a5e176d14a8ca3ff6ef8b38c7ad71d4.jpg'
        alt='Cat with phone'
      />
    </div>
  );
}

export default ContactsPage;
