import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppButton from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AppButton',
  component: AppButton,
} as ComponentMeta<typeof AppButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const VariantDefault = Template.bind({});
VariantDefault.args = {
  label: 'Button',
  variant: 'default',
};

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  label: 'Button',
  variant: 'primary',
};

export const VariantSecondary = Template.bind({});
VariantSecondary.args = {
  label: 'Button',
  variant: 'secondary',
};

export const VariantSuccess = Template.bind({});
VariantSuccess.args = {
  label: 'Button',
  variant: 'success',
};

export const VariantError = Template.bind({});
VariantError.args = {
  label: 'Button',
  variant: 'error',
};

export const VariantDark = Template.bind({});
VariantDark.args = {
  label: 'Button',
  variant: 'dark',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: 'Button',
  size: 'sm',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: 'Button',
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: 'Button',
  size: 'lg',
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
  label: 'Button',
  size: 'xl',
};
