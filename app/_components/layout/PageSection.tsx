import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  backgroundColor?: string;
  id: string;
  position?: string;
}

export default function PageSection({
  children,
  backgroundColor,
  id,
  position = "relative",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col items-center gap-12 px-8 ${position} ${backgroundColor} ${
        backgroundColor ? "py-16" : null
      } `}
    >
      {children}
    </section>
  );
}
