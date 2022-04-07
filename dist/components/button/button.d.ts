import * as React from 'react';
interface AppButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}
declare const AppButton: ({ className, children, ...rest }: AppButtonProps) => JSX.Element;
export default AppButton;
