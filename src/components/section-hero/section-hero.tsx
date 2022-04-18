import React from 'react';
import styles from './section-hero.module.scss';

export interface AppSectionHeroProps {
  mainImg: string;
  mainImgUrl: string;
  title: string;
  titleUrl: string;
  logoImg: string;
  logoImgUrl: string;
  brandTitle: string;
  brandTitleUrl: string;
  viewMoreUrl: string;
}

const AppSectionHero = ({
  mainImg,
  mainImgUrl,
  title,
  titleUrl,
  logoImg,
  logoImgUrl,
  brandTitle,
  brandTitleUrl,
  viewMoreUrl,
}: AppSectionHeroProps) => {
  return (
    <section className={styles['section-hero-container']}>
      <div className={styles['main-img-container']}>
        <a href={mainImgUrl}>
          <img src={mainImg} />
        </a>
      </div>
      <div className={styles['title-container']}>
        <div className={styles['title-content']}>
          <a href={titleUrl}>{title}</a>
          <p>Click here to know more.</p>
        </div>
        <div className={styles['title-logo']}>
          <a href={logoImgUrl}>
            <img src={logoImg} />
          </a>
        </div>
      </div>
      <div className={styles['brand-container']}>
        <a href={brandTitleUrl}>{brandTitle}</a>
        <a href={viewMoreUrl}>View More</a>
      </div>
    </section>
  );
};

export default AppSectionHero;
