import clsx from 'clsx';
import { forwardRef } from 'react';

interface BaseButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLElement>,
  keyof BaseButtonProps
>;

export interface ButtonProps extends BaseButtonProps, NativeButtonProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
          { 'text-sm': size === 'sm' },
          { 'text-lg': size === 'lg' },
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
