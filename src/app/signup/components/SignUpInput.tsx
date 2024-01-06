import { cn } from "@/lib/utils/classnames";
import React from "react";
// version without forward props
// export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
//   inputRef?: RefCallBack;
// }

export interface SignUpInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Reusable Custom Input field with base css style
 * @paraminput React input props
 * @returns React.JSX.Element
 */
const SignUpInput = React.forwardRef<HTMLInputElement, SignUpInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

SignUpInput.displayName = "Input";

export { SignUpInput };
