import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  title: string;
  color?: "primary" | "secondary";
  className?: string;
  titleStyle?: string;
  loading?: boolean;
  disabled?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  iref?: React.RefObject<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  color = "primary",
  className = "",
  titleStyle = "",
  onClick,
  disabled = false,
  type,
  loading,
  prefixIcon,
  suffixIcon,
  iref,
}) => {
  const theme: Record<string, string> = {
    primary: "text-white bg-primary rounded-lg w-full py-4",
    secondary: "text-primary bg-white rounded-lg border border-primary w-full py-4",
  };

  return (
    <button
      ref={iref}
      type={type || "button"}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? () => {} : onClick}
      className={twMerge(
        "whitespace-nowrap flex items-center justify-center gap-x-1 min-w-fit h-fit font-semibold",
        theme[color],
        className,
        disabled ? "cursor-not-allowed" : "",
        loading ? "cursor-wait" : ""
      )}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {prefixIcon}
      <span className={twMerge("header2", titleStyle)}>{title}</span>
      {suffixIcon}
    </button>
  );
};
