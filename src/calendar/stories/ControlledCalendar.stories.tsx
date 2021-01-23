import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Calendar, { ControlledCalendarProps } from '../ControlledCalendar';

export default {
  title: 'ControlledCalendar',
  component: Calendar,
  argTypes: {},
} as Meta;

const Template: Story<ControlledCalendarProps> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
  renderDay: () => <span />,
};
