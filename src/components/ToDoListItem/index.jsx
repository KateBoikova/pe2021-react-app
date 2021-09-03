import React from 'react';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import styles from '../../pages/ToDoPage/ToDoPage.module.scss';
import classNames from 'classnames';

function ToDoListItem (props) {
  const { id, body, isDone, deleteTask, markTask } = props;

  return (
    <li key={id} className={styles.task}>
      <div
        className={classNames(styles.taskItem, {
          [styles.done]: isDone,
        })}
      >
        {body}
      </div>
      <div className={styles.taskItemButtons}>
        <button
          className={styles.doneButton}
          title='Mark as done'
          onClick={() => markTask(id)}
        >
          <CheckCircleOutlineRoundedIcon />
        </button>
        <button
          className={styles.deleteButton}
          title='Delete task'
          onClick={() => deleteTask(id)}
        >
          <DeleteForeverRoundedIcon />
        </button>
      </div>
    </li>
  );
}

export default ToDoListItem;
