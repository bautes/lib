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
import { useDate } from "./utils/useDate";
import Calendar, { CalendarProps } from "./Calendar";

export interface CotrolledCalendarProps extends CalendarProps {
  onChange: (d: Date) => void;
  onEnter: (d: Date) => void;
  activeDay?: Date;
}

const ControlledCalendar = ({
  onChange,
  onEnter,
  date,
  ...props
}: CalendarProps) => {
  const { date: withDate, nextMonth, prevMonth } = useDate(date, onChange);
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
  useEnter(() =>
    onEnter(new Date(date.getFullYear(), date.getMonth(), activeDay))
  );

  return (
    <Calendar {...props} date={withDate} activeDay={activeDay} />
  );
};

export default ControlledCalendar;
