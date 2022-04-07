import * as React from 'react';

interface AppButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children: React.ReactNode;
}

const AppButton = ({ className, children, ...rest }: AppButtonProps) => {
  return (
    <button type='button' className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default AppButton;
