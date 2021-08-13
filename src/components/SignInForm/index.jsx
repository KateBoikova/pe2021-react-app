import { Field, Form, Formik } from 'formik';
import React from 'react';
import { SIGNIN_SCHEMA } from '../../utils/validatingSchemas';

export default function SignInForm () {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        displayName: '',
        emailAdress: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={SIGNIN_SCHEMA}
      onSubmit={(values, formikBag) => {
        formikBag.resetForm();
      }}
    >
      {formikProps => {
        return (
          <Form>
            <Field type='name' name='firstName' />
            <Field type='name' name='lasttName' />
            <Field type='name' name='displayName' />
            <Field type='email' name='emailAdress' />
            <Field type='password' name='password' />
            <Field type='password' name='password' />
            <button type='submit'>Create Account</button>
          </Form>
        );
      }}
    </Formik>
  );
}
