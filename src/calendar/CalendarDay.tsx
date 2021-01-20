import React from "react";
import { isToday } from "./utils/calendar.utils";
import { Day } from "./CalendarDay.styled";

export interface CalendarDayProps {
  year: number;
  month: number;
  day: number;
  active: boolean;
  renderDay: (day: number) => JSX.Element;
  onClick: () => void;
}

const CalendarDay = ({
  day,
  month,
  year,
  active,
  renderDay,
  onClick,
}: CalendarDayProps) => {
  const _isToday = isToday(year, month, day);
  const props = {
    today: _isToday,
    "data-today": _isToday || null,
    active: active,
    "data-active": active || null,
  };
  return day ? (
    <Day data-day={day} onClick={onClick} className="Calendar-day" {...props}>
      {day ? renderDay(day) : null}
    </Day>
  ) : (
    <Day disabled className="Calendar-day" />
  );
};

export default CalendarDay;
