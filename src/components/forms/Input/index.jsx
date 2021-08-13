import React from 'react';
import { ErrorMessage, Field } from 'formik';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input (props) {
  const { name, ...rest } = props;
  return (
    <>
      {/* <Field name={props.name} type={props.type} /> */}
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClassNames = classNames(styles.input, {
            [styles.validInput]: !meta.error && meta.touched,
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input {...field} {...rest} classNames={inputClassNames} />;
        }}
      </Field>
      <ErrorMessage name={props.name} component='div' />
    </>
  );
}

export default Input;
