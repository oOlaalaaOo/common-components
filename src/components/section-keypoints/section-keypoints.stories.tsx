import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppSectionKeypoints, { KeypointProps } from './section-keypoints';
import AppKeyIcon from '../icons/key-icon/key-icon';
import AppTagIcon from '../icons/tag-icon/tag-icon';
import AppShieldCheckIcon from '../icons/shield-check-icon/shield-check-icon';

export default {
  title: 'AppSectionKeypoints',
  component: AppSectionKeypoints,
} as ComponentMeta<typeof AppSectionKeypoints>;

const Template: ComponentStory<typeof AppSectionKeypoints> = (args) => (
  <AppSectionKeypoints {...args} />
);

const KEYPOINTS: KeypointProps[] = [
  {
    id: 'tst-01',
    icon: <AppKeyIcon />,
    title: 'Choose your car',
    description:
      'Research thousands of vehicle models online. Explore expert and consumer reviews.',
  },
  {
    id: 'tst-02',
    icon: <AppTagIcon />,
    title: 'Compare Offers',
    description:
      'Get offers from dealerships within minutes; compare prices, available stock & dealer ratings.',
  },
  {
    id: 'tst-03',
    icon: <AppShieldCheckIcon />,
    title: 'Buy with confidence',
    description:
      'Contact your preferred dealer to book an appointment, test-drive or make a reservation.',
  },
];

export const Default = Template.bind({});
Default.args = {
  keypoints: KEYPOINTS,
};
