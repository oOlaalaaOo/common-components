import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppComboBox, { OptionProps } from './combo-box';

const OPTIONS: OptionProps[] = [
  {
    id: 'tst-01',
    label: 'Tst 01',
    value: 'tst-01',
  },
  {
    id: 'tst-02',
    label: 'Tst 02',
    value: 'tst-02',
  },
  {
    id: 'tst-03',
    label: 'Tst 03',
    value: 'tst-03',
  },
  {
    id: 'tst-04',
    label: 'Tst 04',
    value: 'tst-04',
  },
  {
    id: 'tst-05',
    label: 'Tst 05',
    value: 'tst-05',
  },
];

export default {
  title: 'AppComboBox',
  component: AppComboBox,
} as ComponentMeta<typeof AppComboBox>;

const Template: ComponentStory<typeof AppComboBox> = (args) => (
  <AppComboBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: OPTIONS,
  value: '',
  onSelect: (option) => {
    console.log('option', option);
  },
};
