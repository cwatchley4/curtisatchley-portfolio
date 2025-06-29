import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`py-1 px-2 text-sm sm:text-base md:text-lg text-primary-400 font-header uppercase font-bold tracking-wide border-1 border-primary-200 hover:border-primary-500 hover:text-primary-500 drop-shadow-[0_0_16px_#ff901b] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out rounded cursor-pointer w-max ${
        disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""
      }`}
    >
      {children}
    </button>
  );
}
