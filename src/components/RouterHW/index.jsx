import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import NotFound from '../../pages/ComponentsPage/NotFound';
import Greeting from './../Greeting';
import Counter from './../Counter';
import Stopwatch from './../Stopwatch';
import ViewPortParams from './../ViewPortParams';
// import NotFound from './../pages/ComponentsPage/NotFound';
import styles from './../RoutingBase/RoutingBase.module.scss';

function RouterHW () {
  return (
    <Router>
      <ul className={styles.menu}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/counter'}>Counter</Link>
        </li>
        <li>
          <Link to={'/stopwatch'}>Stopwatch</Link>
        </li>
        <li>
          <Link to={'/viewportparams'}>Viewport parameters</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={'/'}>
          <Greeting name={', My Friend!'} />
        </Route>
        <Route path={'/counter'}>
          <Counter />
        </Route>
        <Route path={'/stopwatch'}>
          <Stopwatch />
        </Route>
        <Route path={'/viewportparams'}>
          <ViewPortParams />
        </Route>
        <Route path={'*'} component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default RouterHW;
