import React from 'react';
interface AppCheckIconProps {
  stroke?: string;
}

const AppCheckIcon = ({ stroke = '#000' }: AppCheckIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={stroke}
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
    </svg>
  );
};

export default AppCheckIcon;
