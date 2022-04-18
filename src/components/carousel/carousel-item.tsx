import React from 'react';
import { CarouselItemsProps } from './carousel';
import styles from './carousel-item.module.scss';

const AppCarouselItem = ({ id, title, brandImg }: CarouselItemsProps) => {
  return (
    <div className={styles['carousel-item-container']} id={id}>
      <img src={brandImg} />
      <h4>{title}</h4>
    </div>
  );
};

export default AppCarouselItem;
