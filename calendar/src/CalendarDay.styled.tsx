import styled, { css } from "styled-components";
import { tabletUp, tabletOnly, mobileOnly } from "./styled/_responsive";

export const border = "1px solid gray";

const cssDay__disabled = css`
  display: none;
  background-color: lightgray;
  ${tabletUp`
    display: inline-block;
  `}
`;

const cssDay__weekend = css`
  background-color: lightgray;
  &:after {
    color: red;
  }
`;

const cssDay__today = css`
  background-color: lightcyan;
  &:after {
    color: green;
  }
`;
const cssDay__active = css`
  background-color: red;
  &:after {
    color: black;
  }
`;

const cssDay__weekdays = css`
  ${mobileOnly`
  &:nth-child(7n)::after {
    content: "Sat "attr(data-day);
  }
  &:nth-child(7n + 1)::after {
    content: "Sun "attr(data-day);
  }
  &:nth-child(7n + 2)::after {
    content: "Mon "attr(data-day);
  }
  &:nth-child(7n + 3)::after {
    content: "Tue "attr(data-day);
  }
  &:nth-child(7n + 4)::after {
    content: "Wed "attr(data-day);
  }
  &:nth-child(7n + 5)::after {
    content: "Thu "attr(data-day);
  }
  &:nth-child(7n + 6)::after {
    content: "Fri "attr(data-day);
  }
  `}
  ${tabletOnly`
    &:nth-child(7n)::after {
      content: "Saturday "attr(data-day);
    }
    &:nth-child(7n + 1)::after {
      content: "Sunday "attr(data-day);
    }
    &:nth-child(7n + 2)::after {
      content: "Monday "attr(data-day);
    }
    &:nth-child(7n + 3)::after {
      content: "Tuesday "attr(data-day);
    }
    &:nth-child(7n + 4)::after {
      content: "Wednesday "attr(data-day);
    }
    &:nth-child(7n + 5)::after {
      content: "Thursday "attr(data-day);
    }
    &:nth-child(7n + 6)::after {
      content: "Friday "attr(data-day);
    }
  `}
`;

export interface DayProps {
  disabled?: any;
  day?: string;
  today?: any;
  active?: any;
}

export const Day = styled.li<DayProps>`
  position: relative;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh / 7);
  vertical-align: top;
  border: ${border};
  border-top: none;
  border-right: none;

  &::after {
    content: attr(data-day);
    position: absolute;
    padding: 0.25rem;
    top: 0;
    right: 0;
  }

  &:nth-child(7n),
  &:nth-child(7n + 1) {
    ${cssDay__weekend}
    ${(props) => (props.active ? cssDay__active : "")};
    ${(props) => (props.today ? cssDay__today : "")};
    ${(props) => (props.active ? cssDay__active : "")};
  }

  &:nth-child(7n),
  &:last-child {
    border-right: ${border};
  }

  ${tabletUp`
    display: inline-block;
    width: calc(100% / 7);
  `}
  ${(props) => (props.disabled ? cssDay__disabled : "")};
  ${(props) => (props.today ? cssDay__today : "")};
  ${(props) => (props.active ? cssDay__active : "")};
  ${cssDay__weekdays}
`;
