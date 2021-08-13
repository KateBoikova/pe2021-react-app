import { parse, addDays, isSameDay, isSameMonth } from 'date-fns';
import React from 'react';
import CalendarDate from './../CalendarDate';
import PropTypes from 'prop-types';

const getDaysOfWeek = (week, year, date) => {
  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

  const days = [];
  for (let i = 0; i < 7; ++i) {
    const dateIndex = addDays(startOfWeek, i);
    days.push(
      <CalendarDate
        date={dateIndex.getDate()}
        isSameDay={isSameDay(new Date(), dateIndex)}
        isSameMonth={isSameMonth(date, dateIndex)}
      />
    );
  }
  return days;
};

function Week (props) {
  const { week, year, date } = props;

  return <tr>{getDaysOfWeek(week, year, date)}</tr>;
}

Week.propTypes = {
  week: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Week;
