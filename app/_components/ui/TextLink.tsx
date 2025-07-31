import Link from "next/link";
import { ReactNode } from "react";

interface TextLinkProps {
  children: ReactNode;
  href: string;
  target?: string;
}

export default function TextLink({
  children,
  href,
  target = "_blank",
}: TextLinkProps) {
  return (
    <Link
      className="hover:underline underline-offset-4"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
