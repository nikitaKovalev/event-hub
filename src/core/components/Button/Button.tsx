import type { ComponentPropsWithRef, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant: 'primary' | 'ghost' | 'secondary' | 'danger';
  children: ReactNode, 
  startIcon?: ReactNode, 
  endIcon?: ReactNode,
}

export default function Button(
  {variant, children, startIcon, endIcon, className, ...props}: ButtonProps,
) {
  return (
    <button 
      className={`button button--${variant} ${className}`.trim()} 
      {...props}
    >
      {startIcon && <span className="button__icon-start">{startIcon}</span>}
      {children}
      {endIcon && <span className="button__icon-end">{endIcon}</span>}
    </button>
  );
}