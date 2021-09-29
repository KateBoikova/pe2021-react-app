import React, { useState } from 'react';
import ToDoForm from '../../components/forms/ToDoForm';
import ToDoList from '../../components/ToDoList';
import CONSTANTS from '../../constants';
import { ThemeContext } from '../../contexts';
import styles from './ToDoPage.module.scss';

function ToDoPage () {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState(CONSTANTS.THEMES.BEIGE);

  const styleMap = {
    [CONSTANTS.THEMES.BLACK]: {
      backgroundColor: 'black',
    },
    [CONSTANTS.THEMES.BEIGE]: {
      backgroundColor: '#ffe2d7',
    },
  };
  const changeTheme = () => {
    setTheme(
      theme === CONSTANTS.THEMES.BEIGE
        ? CONSTANTS.THEMES.BLACK
        : CONSTANTS.THEMES.BEIGE
    );
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={styles.formContainer} style={styleMap[theme]}>
        <button className={styles.themeButton} onClick={changeTheme}>
          Change theme
        </button>
        <ToDoForm tasks={tasks} setTasks={setTasks} />
        {tasks.length === 0 ? (
          <span className={styles.noTasks}>There are no tasks yet</span>
        ) : (
          <ToDoList tasks={tasks} setTasks={setTasks} />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default ToDoPage;
