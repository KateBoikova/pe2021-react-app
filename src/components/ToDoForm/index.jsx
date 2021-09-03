import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TODO_FORM_SCHEMA } from '../../utils/validatingSchemas';
import classNames from 'classnames';

import styles from '../../pages/ToDoPage/ToDoPage.module.scss';

function ToDoForm (props) {
  const { tasks, setTasks } = props;

  const addTask = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      body: values.body,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    formikBag.resetForm();
  };

  return (
    <div className={styles.toDoFormInput}>
      <Formik
        initialValues={{ body: '' }}
        onSubmit={addTask}
        validationSchema={TODO_FORM_SCHEMA}
      >
        {formikProps => (
          <Form>
            <Field name='body'>
              {({ field, meta }) => {
                console.log(meta, field);
                const inputClassNames = classNames(styles.input, {
                  [styles.validInput]: !meta.error && meta.touched,
                  [styles.invalid]: meta.error && meta.touched,
                });
                console.log(inputClassNames);
                return <input {...field} className={inputClassNames} />;
              }}
            </Field>
            <button type='onSubmit' title='Add a task'>
              Add task
            </button>
            <ErrorMessage
              name='body'
              component='div'
              className={styles.errorMessage}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ToDoForm;
