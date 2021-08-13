import React from 'react';
import styles from './../Calendar.module.scss';
import { format } from 'date-fns';

function Day () {
  const currentDate = new Date();
  return (
    <section className={styles.daySection}>
      <div>{format(currentDate, 'eeee')}</div>
      <div>{currentDate.getDate()}</div>
    </section>
  );
}

export default Day;
