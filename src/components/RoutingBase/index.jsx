import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import styles from './RoutingBase.module.scss';
import RouterHW from '../RouterHW';

function RoutingBase () {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Welcome to React-app!</div>
      <div className={styles.main}>
        <RouterHW />
      </div>
      <div className={styles.footer}>Created by &#xa9;Kate Boikova</div>
    </div>
  );
}

export default RoutingBase;
