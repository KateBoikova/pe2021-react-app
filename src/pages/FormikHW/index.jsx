import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormikHWSignUpForm from '../../components/forms/FormikHWSignUpForm';
import FormikHWLogInForm from '../../components/forms/FormikHWLogInForm';
import FormikHWHeader from '../../components/FormikHWHeader';

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
