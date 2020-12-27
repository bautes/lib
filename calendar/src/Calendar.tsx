import React from "react";
import { getCalendar } from "./utils/calendar.utils";
import {
  useEnter,
  useKeyDown,
  useKeyLeft,
  useKeyRigth,
  useKeyUp,
} from "./utils/useKeys";
import { useRange } from "./utils/useNumber";
import { useSmallViewPort } from "./utils/useWindowSize";
import CalendarHeader from "./CalendarHeader";
import CalendarDay from "./CalendarDay";
import * as Styled from "./Calendar.styled";
import { useDate } from "./utils/useDate";

export interface CalendarProps {
  initialDate: Date;
  onChange: (d: Date) => void;
  renderDay: (d: Date) => JSX.Element;
  onEnter: (d: Date) => void;
}

const Calendar = ({
  initialDate,
  onChange,
  renderDay,
  onEnter,
}: CalendarProps) => {
  const { date, nextMonth, prevMonth } = useDate(initialDate, onChange);
  const calendar = getCalendar(date.getFullYear(), date.getMonth() + 1);
  const isSVP = useSmallViewPort();
  const { value: activeDay, setValue: setActiveDay } = useRange(
    1,
    calendar[calendar.length - 1],
    (v) => !isSVP && (v < 0 ? prevMonth() : nextMonth())
  );

  const updateActiveDay = (v: number) =>
    typeof setActiveDay === "function" ? setActiveDay(v) : null;
  useKeyLeft(() => (isSVP ? prevMonth() : updateActiveDay(-1)));
  useKeyRigth(() => (isSVP ? nextMonth() : updateActiveDay(1)));
  useKeyUp(() => updateActiveDay(isSVP ? -1 : -7));
  useKeyDown(() => updateActiveDay(isSVP ? 1 : 7));
  useEnter(() => onEnter(new Date(date.getFullYear(), date.getMonth(), activeDay)));

  return (
    <Styled.Wrapper className="Calendar">
      <CalendarHeader />
      <Styled.CalendarBody className="Calendar-body">
        {calendar.map((day, key) => (
          <CalendarDay
            key={key}
            day={day}
            month={date.getMonth() + 1}
            year={date.getFullYear()}
            renderDay={() => renderDay(new Date(date.getFullYear(), date.getMonth(), day))}
            active={activeDay === day}
            onClick={() => setActiveDay(day - activeDay)}
          />
        ))}
      </Styled.CalendarBody>
    </Styled.Wrapper>
  );
};

export default Calendar;
