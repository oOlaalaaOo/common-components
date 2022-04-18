import React, { useEffect, useRef, useState } from 'react';
import AppChevronLeftIcon from '../icons/chevron-left-icon/chevron-left-icon';
import AppChevronRightIcon from '../icons/chevron-right-icon/chevron-right-icon';
import AppCarouselItem from './carousel-item';
import styles from './carousel.module.scss';

export interface CarouselItemsProps {
  id: string;
  title: string;
  brandImg: string;
}

export interface AppCarouselProps {
  items: CarouselItemsProps[];
}

const SCROLL_OFFSET = 170;

const AppCarousel = ({ items }: AppCarouselProps) => {
  const itemsContainerRef = useRef<any>(null);
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(false);
  
  useEffect(() => {
    if (itemsContainerRef) {
      if (itemsContainerRef) {
        itemsContainerRef.current.addEventListener('scroll', () => {
          const scrolledLeft = itemsContainerRef.current.scrollLeft;

          if (scrolledLeft >= SCROLL_OFFSET) {
            setShowScrollLeft(true);
          } else {
            setShowScrollLeft(false);
          }
        });
      }
    }
  });

  const scrollItems = (scrollTo: 'left' | 'right' = 'left') => {
    const $itemsContainerRef = document.querySelector('#items-container-ref');

    if ($itemsContainerRef) {
      

      if (scrollTo === 'right') {
        $itemsContainerRef.scrollLeft += SCROLL_OFFSET;
      } else {
        $itemsContainerRef.scrollLeft -= SCROLL_OFFSET;
      }
    }
  };

  return (
    <div className={styles['carousel-container']}>
      {showScrollLeft === true && (
        <button type='button' onClick={() => scrollItems('left')}>
          <AppChevronLeftIcon />
        </button>
      )}
      <div className={styles['viewport-container']}>
        <div
          className={styles['items-container']}
          id='items-container-ref'
          ref={itemsContainerRef}
        >
          {items.map((item) => (
            <AppCarouselItem
              key={item.id}
              id={item.id}
              title={item.title}
              brandImg={item.brandImg}
            />
          ))}
        </div>
      </div>
      {showScrollRight === true && (
        <button type='button' onClick={() => scrollItems('right')}>
          <AppChevronRightIcon />
        </button>
      )}
    </div>
  );
};

export default AppCarousel;
