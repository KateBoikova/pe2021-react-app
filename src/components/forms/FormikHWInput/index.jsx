import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import styles from './../FormikHW/FormikHW.module.scss';

function FormikHWInput (props) {
  const { name, ...rest } = props;
  return (
    <>
      <ErrorMessage name={name} component='div' className={styles.error} />
      <Field name={name}>
        {({ field, meta }) => {
          const inputClassNames = classNames(styles.input, {
            [styles.validInput]: !meta.error && meta.touched,
            [styles.invalidInput]: meta.error && meta.touched,
          });
          return <input {...field} {...rest} className={inputClassNames} />;
        }}
      </Field>
    </>
  );
}

export default FormikHWInput;
