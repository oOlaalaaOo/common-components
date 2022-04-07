import * as React from 'react';

interface AppInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

const AppInput = ({ className, ...rest }: AppInputProps) => {
  return <input type='text' className={`${className}`} {...rest} />;
};

export default AppInput;
