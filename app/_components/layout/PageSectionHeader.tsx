import { ReactNode } from "react";

interface PageSectionHeaderProps {
  children: ReactNode;
}

export default function PageSectionHeader({
  children,
}: PageSectionHeaderProps) {
  return (
    <header className="flex flex-col sm:gap-1 md:gap-3 self-center text-center">
      {children}
    </header>
  );
}
