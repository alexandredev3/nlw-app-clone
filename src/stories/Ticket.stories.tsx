import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Ticket from '../components/Ticket';

export default {
  title: 'Component/Ticket',
  component: Ticket,
} as Meta;

const Template: Story<any> = args => <Ticket {...args} />;

export const Default = Template.bind({});
Default.args = {
};

