import React from 'react';
import styles from './../../components/RoutingBase/RoutingBase.module.scss';

function HomePage () {
  return (
    <div>
      <h2 className={styles.pageHeader}>Home page</h2>
      <img
        src='http://images6.fanpop.com/image/photos/37000000/pusheen-cat-pusheen-the-cat-37087852-1192-670.jpg'
        alt='Cat at home'
        className={styles.homePageImg}
      />
    </div>
  );
}

export default HomePage;
