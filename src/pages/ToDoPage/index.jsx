import React, { useState } from 'react';
import ToDoForm from '../../components/ToDoForm';
import ToDoList from '../../components/ToDoList';
import CONSTANTS from '../../constants';
import { ThemeContext } from '../../contexts';
import styles from './ToDoPage.module.scss';

const tasksDB = [{ id: Date.now(), body: 'First task', isDone: false }];

function ToDoPage () {
  const [tasks, setTasks] = useState(tasksDB);
  const [theme, setTheme] = useState(CONSTANTS.THEMES.MULTICOLOR);

  const changeTheme = () => {
    setTheme(
      theme === CONSTANTS.THEMES.MULTICOLOR
        ? CONSTANTS.THEMES.MONOCHROMIC
        : CONSTANTS.THEMES.MULTICOLOR
    );
  };
  console.log(theme);
  return (
    <ThemeContext.Provider value={theme}>
      <div className={styles.formContainer}>
        <button className={styles.themeButton} onClick={changeTheme}>
          Change theme
        </button>
        <ToDoForm tasks={tasks} setTasks={setTasks} />
        {tasks.length === 0 ? (
          'There are no tasks'
        ) : (
          <ToDoList tasks={tasks} setTasks={setTasks} />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default ToDoPage;
