import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppSectionHero from './section-hero';

export default {
  title: 'AppSectionHero',
  component: AppSectionHero,
} as ComponentMeta<typeof AppSectionHero>;

const Template: ComponentStory<typeof AppSectionHero> = (args) => (
  <AppSectionHero {...args} />
);

export const Default = Template.bind({});
Default.args = {
  mainImg:
    'https://d1hv7ee95zft1i.cloudfront.net/custom/ads/homepage-header-ad/desktop/62466a2bb3282.webp',
  mainImgUrl: 'https://www.autodeal.com.ph/cars/mitsubishi/xpander',
  title: 'The All-New Xpander: NOW PRE-SELLING',
  titleUrl: 'https://www.autodeal.com.ph/cars/mitsubishi/xpander',
  logoImg:
    'https://d1hv7ee95zft1i.cloudfront.net/custom/client/standard/5ad9c62cd5b74.png',
  logoImgUrl: 'https://www.autodeal.com.ph/cars/mitsubishi/xpander',
  brandTitle: 'Mitsubishi Motors',
  brandTitleUrl: 'https://www.autodeal.com.ph/cars/mitsubishi/xpander',
  viewMoreUrl: 'https://www.autodeal.com.ph/cars/mitsubishi/xpander',
};
