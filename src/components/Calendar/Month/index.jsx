import React from 'react';
import Week from '../Week';
import { format, getWeeksInMonth, getWeek } from 'date-fns';

const getWeeks = date => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  const firstWeek = getWeek(firstDayOfMonth);

  const year = date.getFullYear();

  const weeks = [];

for (
  let i = 0; 
  i < firstWeek + getWeeksInMonth(date); 
  i++) 
  {
    weeks.push(<Week key={i} week={i} year={year} />);
  }

  return weeks;
};

function Month(props) {
  const { date } = props;
  return (
    <div>
      <section>
        <table>
          <caption>{format(date, 'MMMM yyyy')}</caption>
          <thead>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            {getWeeks(date)}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Month;
