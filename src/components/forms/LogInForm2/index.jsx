import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validatingSchemas';
import Input from '../Input';

function LogInForm () {
  const loginFormInitailValues = {
    email: '',
    password: '',
  };

  const loginFormHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={loginFormInitailValues}
      onSubmit={loginFormHandleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <Input type='text' name='email' placeholder='email' />
            <Input type='text' name='email' />

            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>

    // <Formik
    //   initialValues = {{
    //     userEmail: '',
    //     userPasssword: '',
    //   }}
    //   validationSchema = {LOGIN_SCHEMA}
    //   onSubmit = {(values, formikBag) => {
    //     formikBag.resetForm();
    //   }}>
    //   {formikProps => {
    //     return (
    //     <Form>
    //       <Field type="email" name='userEmail'/>
    //       <Field type="password" name='userPassword'/>
    //       <button type='submit'>Submit</button>
    //     </Form>
    //     );
    //   }}
    // </Formik>
  );
}

export default LogInForm;
