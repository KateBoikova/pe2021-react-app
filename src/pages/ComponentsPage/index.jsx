import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Greeting from '../../components/Greeting';
import Counter from '../../components/Counter';
import Stopwatch from '../../components/Stopwatch';
import ViewPortParams from '../../components/ViewPortParams';
import NotFound from './NotFound';
import styles from './../../components/RoutingBase/RoutingBase.module.scss';

function ComponentsPage () {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ul className={styles.nestedMenu}>
        <li>
          <Link to={`${url}/greeting`}>Greeting</Link>
        </li>
        <li>
          <Link to={`${url}/counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`${url}/stopwatch`}>Stopwatch</Link>
        </li>
        <li>
          <Link to={`${url}/viewportparams`}>Viewport parameters</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/greeting`}>
          <Greeting name={', my Friend!'} />
        </Route>
        <Route path={`${path}/counter`}>
          <Counter />
        </Route>
        <Route path={`${path}/stopwatch`}>
          <Stopwatch />
        </Route>
        <Route path={`${path}/viewportparams`}>
          <ViewPortParams />
        </Route>
        <Route path={`${path}/*`} component={NotFound} />
      </Switch>
      <div>
        <img
          src='https://images.squarespace-cdn.com/content/v1/531d19bee4b0467fe7e6fcc0/1548191963871-F7R59IYI8XYJCX5H0YNR/CourtneyYu_01_Wizard_Pusheen.png?format=500w'
          alt='Cat magic'
        />
      </div>
    </div>
  );
}

export default ComponentsPage;
