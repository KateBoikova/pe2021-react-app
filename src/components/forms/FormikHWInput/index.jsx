import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

function FormikHWInput (props) {
  const { name, styles, ...rest } = props;

  return (
    <div className={styles.inputDiv}>
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
    </div>
  );
}

export default FormikHWInput;
