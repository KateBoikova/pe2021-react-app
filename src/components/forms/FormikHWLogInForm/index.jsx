import React from 'react';
import { Field, Form, Formik } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validatingSchemas';
import styles from '../../../pages/FormikHW/FormikHW.module.scss';
import FormikHWInput from '../FormikHWInput';
import FormikLoginFormHeader from './FormikLoginFormHeader';

function FormikHWLoginForm () {
  const formikInitialValues = {
    email: '',
    password: '',
    checked: '',
  };
  const formikHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  const validationStyles = {
    // input: styles.input,
    validInput: styles.validInput,
    invalid: styles.invalid,
    error: styles.error,
    inputDiv: styles.inputDiv,
  };

  return (
    <>
      <div className={styles.formContainer}>
        <FormikLoginFormHeader />
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
                  styles={validationStyles}
                />
                <FormikHWInput
                  type='password'
                  name='password'
                  placeholder='Password'
                  styles={validationStyles}
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
