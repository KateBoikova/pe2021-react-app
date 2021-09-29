import React from 'react';
import { Formik, Form } from 'formik';
import { TODO_FORM_SCHEMA } from '../../../utils/validatingSchemas';
import styles from '../../../pages/ToDoPage/ToDoPage.module.scss';
import Input from '../Input';

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

  const inputStyles = {
    input: styles.input,
    validInput: styles.validInput,
    invalid: styles.invalid,
    error: styles.error,
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
            <Input
              name='body'
              placeholder='Enter your task'
              styles={inputStyles}
            />
            <button type='submit' title='Add a task'>
              Add task
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ToDoForm;
