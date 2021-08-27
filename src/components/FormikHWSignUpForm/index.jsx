import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SIGNIN_SCHEMA } from '../../utils/validatingSchemas';
import styles from '../forms/FormikHW/FormikHW.module.scss';
import FormikHWInput from '../forms/FormikHWInput';

function FormikHWSignUpForm () {
  const formikInitialValues = {
    userFirstName: '',
    userLastName: '',
    userDisplayName: '',
    userEmailAddress: '',
    password: '',
    passwordConfirmation: '',
    picked: '',
    checked: '',
  };
  const formikHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.mainHeading}>Create an account</h1>
        <p>We always keep your name and email address private.</p>
        <Formik
          initialValues={formikInitialValues}
          onSubmit={formikHandleSubmit}
          validationSchema={SIGNIN_SCHEMA}
        >
          {formikProps => {
            return (
              <Form className={styles.signupForm}>
                <FormikHWInput
                  name='userFirstName'
                  placeholder='First name'
                  className={styles.firstName}
                />
                <FormikHWInput
                  name='userLastName'
                  placeholder='Last name'
                  className={styles.lastName}
                />
                <FormikHWInput
                  name='userDisplayName'
                  placeholder='Display Name'
                  className={styles.displayName}
                />
                <FormikHWInput
                  type='text'
                  name='userEmailAddress'
                  placeholder='Email Address'
                  className={styles.email}
                />
                <FormikHWInput
                  type='password'
                  name='password'
                  placeholder='Password'
                  className={styles.password}
                />
                <FormikHWInput
                  type='password'
                  name='passwordConfirmation'
                  placeholder='Password Confirmation'
                  className={styles.passwordConfirm}
                />
                <label className={styles.radio1}>
                  <Field type='radio' name='picked' value='buyer' />
                  Join As a Buyer
                  <br />
                  <span>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </span>
                </label>
                <label className={styles.radio2}>
                  <Field type='radio' name='picked' value='seller' />
                  Join As a Creative or Marketplace Seller
                  <br />
                  <span>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </span>
                </label>
                <label className={styles.checkbox}>
                  <Field type='checkbox' name='checked' value='allow' />
                  Allow Squadhelp to send marketing/promotional offers from time
                  to time
                </label>
                <button type='submit'>Create account</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default FormikHWSignUpForm;
