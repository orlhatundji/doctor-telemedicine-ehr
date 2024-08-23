import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

// Assets
import { ReactComponent as MaskIcon } from "../assets/icons/mask.svg";

interface InputProps {
  name: string;
  type?: "password" | "text" | "number" | "email" | "tel" | "url" | "file" | "date" | "time" | "datetime-local" | "month" | "week" | "search" | "color";
  defaultValue?: any;
  value?: any;
  placeholder?: string;
  label?: string;
  register?: any;
  rules?: any;
  errors?: any;
  disabled?: boolean;
  className?: string;
  labelStyle?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const labelDefault = "text-tertiary-100 text-base leading-[1.2rem]";

const categoryType = twMerge(
    "border border-stroke-100 outline-none placeholder-text-primary placeholder:text-sm",
    "text-base -tracking-[0.4px] font-semibold p-4 leading-5 rounded-lg focus:border-stroke-100",
    "placeholder:font-normal"
  );

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  defaultValue,
  value,
  placeholder,
  label,
  register,
  rules,
  errors,
  disabled,
  className,
  labelStyle,
  ...props
}) => {
  const [showPassword, setSetShowPassword] = useState(type === "password" ? false : true)

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={twMerge(labelDefault, labelStyle)}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          // type={showPassword ? "text" : "password"}
          type={type ? type : showPassword ? "text" : "password"}
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
          {...register(name, { ...rules })}
          className={twMerge("w-full", categoryType, className)}
          placeholder={placeholder}
          {...props}
        />
        {type === "password" && <MaskIcon className="absolute right-4 cursor-pointer" onClick={() => setSetShowPassword((prev) => !prev)} />}
      </div>
      {errors && errors[name] && (
        <span className="text-red-alert text-sm">
          * {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default Input;

export const TextArea: React.FC<InputProps> = ({
  name,
  defaultValue,
  placeholder,
  label,
  register,
  rules,
  errors,
  disabled,
  className,
  labelStyle = "",
}) => {
  const categoryType = twMerge(
      "border border-stroke-100 outline-none bg-white4 placeholder-text-primary",
      "text-base font-semibold p-4 leading-5 rounded10 focus:border-stroke-200 w-full",
      "placeholder:font-normal placeholder:text-sm text-sm font-normal",
      className
    )
  

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={twMerge(
            labelStyle
          )}
        >
          {label}
        </label>
      )}
      <textarea
        disabled={disabled}
        defaultValue={defaultValue}
        {...register(name, { ...rules })}
        className={twMerge(categoryType)}
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className="text-red-alert text-sm">
          * {errors[name]?.message}
        </span>
      )}
    </div>
  );
};
