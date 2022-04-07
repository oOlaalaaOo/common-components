import * as React from 'react';
interface AppInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
}
declare const AppInput: ({ className, ...rest }: AppInputProps) => JSX.Element;
export default AppInput;
