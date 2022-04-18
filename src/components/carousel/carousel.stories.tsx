import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppCarousel, { CarouselItemsProps } from './carousel';

export default {
  title: 'AppCarousel',
  component: AppCarousel,
} as ComponentMeta<typeof AppCarousel>;

const Template: ComponentStory<typeof AppCarousel> = (args) => (
  <AppCarousel {...args} />
);

const ITEMS: CarouselItemsProps[] = [
  {
    id: 'tst-01',
    title: 'Ford',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/ford-5f91516c55e69.webp',
  },
  {
    id: 'tst-02',
    title: 'Nissan',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/nissan-61b2c15b26163.webp',
  },
  {
    id: 'tst-03',
    title: 'Isuzu',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/54617d00e8edc.webp',
  },
  {
    id: 'tst-04',
    title: 'Mitsubishi',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/mitsubishi-5f4da9847ea60.webp',
  },
  {
    id: 'tst-05',
    title: 'Kia',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/kia-6187f52ad0715.webp',
  },
  {
    id: 'tst-06',
    title: 'Suzuki',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/suzuki-6156dca556a35.webp',
  },
  {
    id: 'tst-07',
    title: 'Cherry',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/chery-5e698afb2f0cd.webp',
  },
  {
    id: 'tst-08',
    title: 'Mazda',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/mazda-5c8b19bcc76ed.webp',
  },
  {
    id: 'tst-09',
    title: 'Toyota',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/54617cfcc4917.webp',
  },
  {
    id: 'tst-10',
    title: 'MG',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/556e8e8b2fdae.webp',
  },
  {
    id: 'tst-11',
    title: 'Chevrolet',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/chevrolet-5c69f4fe21e29.webp',
  },
  {
    id: 'tst-12',
    title: 'Volkswagen',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/volkswagen-614ad121797ea.webp',
  },
  {
    id: 'tst-13',
    title: 'Hyundai',
    brandImg:
      'https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/54617d0121287.webp',
  },
];

export const Default = Template.bind({});
Default.args = {
  items: ITEMS,
};
