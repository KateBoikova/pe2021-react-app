import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
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
          <Link to={'/aboutpage'}>About us</Link>
        </li>
        <li>
          <Link to={'/componentspage'}>Explore our components</Link>
        </li>
        <li>
          <Link to={'/contactspage'}>Contact us</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route path={'/aboutpage'}>
          <AboutPage />
        </Route>
        <Route path={'/componentspage'}>
          <ComponentsPage />
        </Route>
        <Route path={'/contactspage'}>
          <ContactsPage />
        </Route>
        <Route path={'*'} component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default RouterHW;
