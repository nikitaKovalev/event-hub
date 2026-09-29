import type { ComponentPropsWithRef } from "react";
import "./Input.css";

export default function Input(
  {className = '', ...props}: ComponentPropsWithRef<'input'>
) {
  return (
    <input 
      className={`events-filter__input ${className}`.trim()} 
      {...props}
    />
  );
}