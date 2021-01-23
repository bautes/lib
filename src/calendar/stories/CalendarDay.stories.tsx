import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CalendarDay, { CalendarDayProps } from '../CalendarDay';
import { Day, DayProps } from '../CalendarDay.styled';

export default {
  title: 'Calendar Day',
  component: CalendarDay,
  argTypes: {},
} as Meta;

const Template: Story<CalendarDayProps> = args => <CalendarDay {...args} />;
const StyledTemplate: Story<DayProps> = args => <Day {...args} />;

export const Default = Template.bind({});
Default.args = {
  year: 2020,
  month: 12,
  day: 25,
  activeDay: false,
  renderDay: day => <span>test {day}</span>,
};

export const Active = StyledTemplate.bind({});
Active.args = {
  day: '1',
  active: true,
};

export const Disabled = StyledTemplate.bind({});
Disabled.args = {
  day: '1',
  disabled: true,
};

export const Today = StyledTemplate.bind({});
Today.args = {
  day: '1',
  today: true,
};
