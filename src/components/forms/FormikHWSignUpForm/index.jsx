import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SIGNIN_SCHEMA } from '../../../utils/validatingSchemas';
import styles from '../../../pages/FormikHW/FormikHW.module.scss';
import FormikHWInput from '../FormikHWInput';
import FormikHWSignUpHeaders from './FormikHWSignUpHeaders';

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

  const validationStyles = {
    validInput: styles.validInput,
    invalidInput: styles.invalidInput,
    error: styles.error,
    inputDiv: styles.inputDiv,
  };
  return (
    <>
      <div className={styles.formContainer}>
        <FormikHWSignUpHeaders />
        <Formik
          initialValues={formikInitialValues}
          onSubmit={formikHandleSubmit}
          validationSchema={SIGNIN_SCHEMA}
        >
          {formikProps => {
            return (
              <Form className={styles.signupForm}>
                <div className={styles.nameContainer}>
                  <FormikHWInput
                    name='userFirstName'
                    placeholder='First name'
                    className={(styles.firstName, styles.signUpInput)}
                    styles={validationStyles}
                  />
                  <FormikHWInput
                    name='userLastName'
                    placeholder='Last name'
                    className={(styles.lastName, styles.signUpInput)}
                    styles={validationStyles}
                  />
                </div>
                <div className={styles.dispNameAndEmailContainer}>
                  <FormikHWInput
                    name='userDisplayName'
                    placeholder='Display Name'
                    className={(styles.displayName, styles.signUpInput)}
                    styles={validationStyles}
                  />
                  <FormikHWInput
                    type='text'
                    name='userEmailAddress'
                    placeholder='Email Address'
                    className={(styles.email, styles.signUpInput)}
                    styles={validationStyles}
                  />
                </div>
                <div className={styles.passwordContainer}>
                  <FormikHWInput
                    type='password'
                    name='password'
                    placeholder='Password'
                    className={(styles.password, styles.signUpInput)}
                    styles={validationStyles}
                  />
                  <FormikHWInput
                    type='password'
                    name='passwordConfirmation'
                    placeholder='Password Confirmation'
                    className={(styles.passwordConfirm, styles.signUpInput)}
                    styles={validationStyles}
                  />
                </div>

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
