import { Field, Form, Formik } from 'formik';
import React from 'react';
import { LOGIN_SCHEMA } from '../../utils/validatingSchemas';
import styles from '../forms/FormikHW/FormikHW.module.scss';
import FormikHWInput from '../forms/FormikHWInput';

function FormikHWLoginForm () {
  const formikInitialValues = {
    email: '',
    password: '',
    checked: '',
  };
  const formikHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h1>Login to your account</h1>
        <Formik
          initialValues={formikInitialValues}
          onSubmit={formikHandleSubmit}
          validationSchema={LOGIN_SCHEMA}
        >
          {formikProps => {
            return (
              <Form className={styles.loginForm}>
                <FormikHWInput
                  name='email'
                  type='text'
                  placeholder='Email address'
                />
                <FormikHWInput
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <label className={styles.checkbox}>
                  <Field type='checkbox' name='checked' value='remember' />
                  Remember me
                </label>
                <button type='submit'>Login</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default FormikHWLoginForm;
