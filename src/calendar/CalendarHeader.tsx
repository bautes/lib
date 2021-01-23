import React from 'react';
import * as Styled from './Calendar.styled';

const CalendarHeader = () => {
  const labels: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  return (
    <Styled.CalendarHeader className="Calendar-header">
      {labels.map((label, day) => (
        <Styled.DayHeader key={day}>{label}</Styled.DayHeader>
      ))}
    </Styled.CalendarHeader>
  );
};

export default CalendarHeader;
