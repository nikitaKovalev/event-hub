import type { ComponentPropsWithRef } from "react";
import "./Select.css";

export default function Select(
  {className = '', children, ...props}: ComponentPropsWithRef<'select'>,
) {
  return (
    <select 
      className={`events-filter__select ${className}`.trim()} 
      {...props}
    >
      {children}
    </select>
  );
}