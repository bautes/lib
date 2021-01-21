import React from "react";
import { getCalendar, isToday } from "./utils/calendar.utils";
import CalendarHeader from "./CalendarHeader";
import CalendarDay from "./CalendarDay";
import * as Styled from "./Calendar.styled";
export interface CalendarProps {
  className?: string;
  date: Date;
  activeDay?: Date;
  renderDay: (d: Date) => JSX.Element;
  onClickDay: (d: Date) => void;
}

const Calendar = ({
  className = '',
  date = new Date(),
  activeDay,
  renderDay,
  onClickDay,
}: CalendarProps) => {
  const calendar = getCalendar(date.getFullYear(), date.getMonth() + 1);
  const _isToday = isToday(date);

  return (
    <Styled.Wrapper className={className + " Calendar"}>
      <CalendarHeader />
      <Styled.CalendarBody className="Calendar-body">
        {calendar.map((day, key) => {
          const dayDate = new Date(date.getFullYear(), date.getMonth(), day);
          return (
            <CalendarDay
              key={key}
              day={day}
              renderDay={() => renderDay(dayDate)}
              active={activeDay?.toDateString() === dayDate.toDateString()}
              today={_isToday(day)}
              onClick={() => onClickDay(dayDate)}
            />
          );
        })}
      </Styled.CalendarBody>
    </Styled.Wrapper>
  );
};

export default Calendar;
