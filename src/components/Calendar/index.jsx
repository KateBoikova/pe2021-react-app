// import React from 'react';
import { Component } from 'react';
import Day from './Day';
import Month from './Month';
import styles from './Calendar.module.scss';

class Calendar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       date: new Date('December 17, 1995 03:24:00'),
    }
  }
  
  render() {
    const { date } = this.state;
    return (
      <article className={styles.calendarContainer}>
        <Day />
        <Month date={ date }/>
      </article>
    );
  }
  
}

export default Calendar;
