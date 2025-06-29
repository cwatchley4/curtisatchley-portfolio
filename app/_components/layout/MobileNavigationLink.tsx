import Link from "next/link";
import { ReactNode } from "react";

interface MobileNavigationLinkProps {
  children: ReactNode;
  link: string;
  onSetIsOpen: () => void;
  target?: string;
}

export default function MobileNavigationLink({
  children,
  link,
  onSetIsOpen,
  target = "_self",
}: MobileNavigationLinkProps) {
  return (
    <li className="hover:text-primary-600 transition-colors duration-300 w-max">
      <Link href={link} target={target} onClick={onSetIsOpen}>
        {children}
      </Link>
    </li>
  );
}
