import React from 'react';
import styles from './../../components/RoutingBase/RoutingBase.module.scss';

function AboutPage () {
  return (
    <div>
      <h2 className={styles.pageHeader}>About us</h2>
      <img
        src='https://i.pinimg.com/originals/ab/dc/be/abdcbe5fdef8ee78bdc312cda2b67df6.gif'
        alt='Cat and laptop'
      />
    </div>
  );
}
export default AboutPage;
