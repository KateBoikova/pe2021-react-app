import React from 'react';
import styles from './../Calendar.module.scss';
import classNames from 'classnames';

function CalendarDate(props) {
  const { date, isSameDay, isSameMonth } = props;

  return (
    <td className={classNames({[styles.currentDay]: isSameDay})}>
      {isSameMonth ? date : ''}
    </td>
  )
}

export default CalendarDate;
