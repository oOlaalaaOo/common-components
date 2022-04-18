import React from 'react';
import styles from './input.module.scss';

export interface AppInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  containerClassName?: string;
  inputClassName?: string;
  scale: 'sm' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconRightClick?: () => void;
  iconLeftClick?: () => void;
}

const AppInput = ({
  containerClassName,
  inputClassName,
  scale = 'sm',
  iconLeft,
  iconRight,
  iconRightClick,
  iconLeftClick,
  ...rest
}: AppInputProps) => {
  return (
    <div className={`${styles['input-container']} ${containerClassName}`}>
      {iconLeft && (
        <span
          className='icon icon-left'
          onClick={() => {
            if (iconLeftClick) iconLeftClick();
          }}
        >
          {iconLeft}
        </span>
      )}
      <input
        type='text'
        className={`${styles['input']} ${
          styles[`input-${scale}`]
        } ${inputClassName}`}
        {...rest}
      />
      {iconRight && (
        <span
          className='icon icon-right'
          onClick={() => {
            if (iconRightClick) iconRightClick();
          }}
        >
          {iconRight}
        </span>
      )}
    </div>
  );
};

export default AppInput;
