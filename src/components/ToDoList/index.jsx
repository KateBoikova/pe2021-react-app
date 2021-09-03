import React from 'react';
import ToDoListItem from '../ToDoListItem';
import styles from '../../pages/ToDoPage/ToDoPage.module.scss';

function ToDoList (props) {
  const { tasks, setTasks } = props;

  const deleteTask = id => {
    setTasks(tasks.filter(task => id !== task.id));
  };

  const markTask = id => {
    const index = tasks.findIndex(task => id === task.id);
    tasks[index].isDone = !tasks[index].isDone;
    setTasks([...tasks]);
  };

  return (
    <ul className={styles.tasksList}>
      {tasks.map(task => (
        <ToDoListItem {...task} deleteTask={deleteTask} markTask={markTask} />
      ))}
    </ul>
  );
}

export default ToDoList;
