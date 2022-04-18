import React from 'react';
import AppSectionKeypoint from './section-keypoint';
import styles from './section-keypoints.module.scss';

export interface KeypointProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface AppSectionKeypointsProps {
  keypoints: KeypointProps[];
}

const AppSectionKeypoints = ({ keypoints }: AppSectionKeypointsProps) => {
  return (
    <div className={styles['section-keypoints-container']}>
      {keypoints.map((keypoint) => (
        <AppSectionKeypoint
          key={keypoint.id}
          id={keypoint.id}
          title={keypoint.title}
          description={keypoint.description}
          icon={keypoint.icon}
        />
      ))}
    </div>
  );
};

export default AppSectionKeypoints;
