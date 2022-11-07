import React, { ReactNode } from "react";

type ButtonVariants = "primary" | "secondary";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  hoverable?: boolean;
  variant?: ButtonVariants;
}

const Button = ({
  children,
  className,
  hoverable = true,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const variants: Record<ButtonVariants, string> = {
    primary: "bg-red-700 text-white",
    secondary: "bg-gray-300",
  };

  return (
    <button
      {...rest}
      className={`disabled:opacity-50 py-2 px-3 ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
