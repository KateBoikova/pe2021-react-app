import React from 'react';
import styles from './RoutingBase.module.scss';
import RouterHW from '../RouterHW';

function RoutingBase () {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Welcome to React-app!</header>
      <main className={styles.main}>
        <RouterHW />
      </main>
      <footer className={styles.footer}>Created by &#xa9;Kate Boikova</footer>
    </div>
  );
}

export default RoutingBase;
