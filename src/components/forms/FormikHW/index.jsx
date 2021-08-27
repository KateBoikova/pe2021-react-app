import React from 'react';
import FormikHWSignUpForm from '../../FormikHWSignUpForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormikHWLogInForm from '../../FormikHWLogInForm';
import FormikHWHeader from '../../FormikHWHeader';

function FormikHW () {
  return (
    <>
      <Router>
        <FormikHWHeader />
        <Switch>
          <Route path={'/login'}>
            <FormikHWLogInForm />
          </Route>
          <Route path={'/'}>
            <FormikHWSignUpForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default FormikHW;
