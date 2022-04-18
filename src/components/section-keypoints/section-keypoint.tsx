import React from 'react';
import { KeypointProps } from './section-keypoints';
import styles from './section-keypoint.module.scss';

const AppSectionKeypoint = ({
  id,
  icon,
  title,
  description,
}: KeypointProps) => {
  return (
    <div className={styles['section-keypoint-container']} id={id}>
      <div className={styles['icon-container']}>{icon}</div>
      <div className={styles['text-content-container']}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppSectionKeypoint;
