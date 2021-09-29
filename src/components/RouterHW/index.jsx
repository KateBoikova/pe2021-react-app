import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from '../../pages/ComponentsPage/NotFound';
import styles from './../RoutingBase/RoutingBase.module.scss';
import HomePage from './../../pages/HomePage';
import AboutPage from './../../pages/AboutPage';
import ComponentsPage from '../../pages/ComponentsPage';
import ContactsPage from './../../pages/ContactsPage';

function RouterHW () {
  return (
    <Router>
      <ul className={styles.menu}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About us</Link>
        </li>
        <li>
          <Link to={'/components'}>Explore our components</Link>
        </li>
        <li>
          <Link to={'/contacts'}>Contact us</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route path={'/about'}>
          <AboutPage />
        </Route>
        <Route path={'/components'}>
          <ComponentsPage />
        </Route>
        <Route path={'/contacts'}>
          <ContactsPage />
        </Route>
        <Route path={'*'} component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default RouterHW;
