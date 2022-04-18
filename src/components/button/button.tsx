import React from 'react';
import styles from './button.module.scss';

export interface AppButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xl';
  variant: 'default' | 'primary' | 'secondary' | 'dark' | 'error' | 'success';
}

const AppButton = ({
  className,
  label,
  iconLeft,
  iconRight,
  size = 'md',
  variant = 'default',
  ...rest
}: AppButtonProps) => {
  return (
    <button
      type='button'
      className={`${styles['button']} ${styles[`button-${size}`]} ${
        styles[`button-${variant}`]
      } ${className}`}
      {...rest}
    >
      {iconLeft && <span className='icon-left'>{iconLeft}</span>}
      {label}
      {iconRight && <span className='icon-right'>{iconRight}</span>}
    </button>
  );
};

export default AppButton;
