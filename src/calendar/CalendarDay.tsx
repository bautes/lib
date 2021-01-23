import React from 'react';
import { Day } from './CalendarDay.styled';
export interface CalendarDayProps {
  day: number;
  today: boolean;
  active: boolean;
  renderDay: (day: number) => JSX.Element;
  onClick: () => void;
}

const CalendarDay = ({
  day,
  today,
  active,
  renderDay,
  onClick,
}: CalendarDayProps) => {
  const props = {
    today,
    'data-today': today || null,
    active,
    'data-active': active || null,
  };
  return day ? (
    <Day data-day={day} onClick={onClick} className="Calendar-day" {...props}>
      {day ? renderDay(day) : null}
    </Day>
  ) : (
    <Day disabled data-disabled className="Calendar-day" />
  );
};

export default CalendarDay;
