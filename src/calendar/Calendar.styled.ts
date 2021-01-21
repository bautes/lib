import styled from "styled-components";
import { tabletUp } from "../styled/_responsive";
import { border, Day } from './CalendarDay.styled';

export const Wrapper = styled.div`
  max-width: calc(100vw - 2rem);
  --calendar-day-height: calc(100vh / 7);
  margin: 0 auto;
  ${tabletUp`
    max-width: calc(100vw - 20rem);
  `}
`;

export const CalendarHeader = styled.div`
  display: none;
  border-top: ${border};
  ${tabletUp`
    display: block;
  `}
`;
export const CalendarBody = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const DayHeader = styled(Day)`
  background-color: lightgray;
  height: 1.5rem;
  text-align: center;
`;