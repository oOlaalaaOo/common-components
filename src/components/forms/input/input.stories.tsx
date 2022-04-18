import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppInput from './input';
import AppSearchIcon from '../../icons/search-icon/search-icon';

export default {
  title: 'AppInput',
  component: AppInput,
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = (args) => (
  <AppInput {...args} />
);

export const ScaleSmall = Template.bind({});
ScaleSmall.args = {
  scale: 'sm',
  placeholder: 'Sample',
};

export const ScaleLarge = Template.bind({});
ScaleLarge.args = {
  scale: 'lg',
  placeholder: 'Sample',
};
