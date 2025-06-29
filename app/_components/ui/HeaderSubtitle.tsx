import { ReactNode } from "react";

interface HeaderSubtitleProps {
  children: ReactNode;
}

export default function HeaderSubtitle({ children }: HeaderSubtitleProps) {
  return (
    <p className="text-lg sm:text-xl md:text-2xl transition-normal duration-300 ease-in-out">
      {children}
    </p>
  );
}
