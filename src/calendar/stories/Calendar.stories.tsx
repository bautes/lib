import React from 'react';
import styled from 'styled-components';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Calendar, { CalendarProps } from '../Calendar';

const StyledCalendar = styled(Calendar)`
  border: 1px solid blue;
  .Calendar-day {
    border: 1px solid green;
  }
  .Calendar-day[data-active] {
    background-color: gold;
  }
  .Calendar-day[data-today] {
    &:after {
      content: 'Today ' attr(data-day);
      font-size: 20px;
    }
  }
  .Calendar-day[data-disabled] {
    background-color: darkgray;
    border: none;
  }
`;

export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {},
} as Meta;

const Template: Story<CalendarProps> = args => <Calendar {...args} />;
const StyledTemplate: Story<CalendarProps> = args => (
  <StyledCalendar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
  renderDay: () => <span />,
};

export const Styled = StyledTemplate.bind({});
Styled.args = {
  date: new Date(),
  renderDay: () => <span />,
  activeDay: new Date(),
};
