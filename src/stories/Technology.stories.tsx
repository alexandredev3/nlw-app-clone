import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Technology from '../components/Technology';
import reactTechImage from './assets/icon-react.png';

interface Props {
  techName: string;
  techColor: string;
  techIcon: string;
  techType: 'Front-end' | 'Back-end' | 'Mobile';
  description: string;
}

export default {
  title: 'Component/Technology',
  component: Technology,
} as Meta;

const Template: Story<Props> = args => <Technology {...args} />;

export const Default = Template.bind({});
Default.args = {
  techName: "ReactJS",
  techIcon: reactTechImage,
  techColor: "#2AC7E3",
  techType: "Front-end",
  description: "Se o seu objetivo está alinhado com o front-end, e você deseja construir interfaces modernas e reativas na web utilizando uma biblioteca modular e escalável, essa trilha é para você."
};

