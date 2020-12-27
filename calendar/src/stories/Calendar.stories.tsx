import React from "react";
import styled from "styled-components";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Calendar, {
  CalendarProps,
} from "../Calendar";

const StyledWrapper = styled.div`
  .Calendar {
    border: 1px solid blue;
  }
  .Calendar-day {
    border: 1px solid green;
  }
  .Calendar-day[data-active] {
    background-color: orange;
    :after {
      content: "Today "attr(data-day);
      font-size: 30px;
    }
  }
  .Calendar-day[data-today] {
    background-color: gold;
  }
`;

export default {
  title: "Calendar",
  component: Calendar,
  argTypes: {},
} as Meta;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;
const StyledTemplate: Story<CalendarProps> = (args) => <StyledWrapper><Calendar {...args} /></StyledWrapper>;

export const Default = Template.bind({});
Default.args = {
  initialDate: new Date(),
  renderDay: () => <span />,
};


export const Styled = StyledTemplate.bind({});
Styled.args = {
  initialDate: new Date(),
  renderDay: () => <span />,
};
