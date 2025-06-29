"use client";

import { TargetAndTransition } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction, useRef } from "react";

import Link from "next/link";

interface NavigationLinkProps {
  children: ReactNode;
  link: string;
  target?: "_self" | "_blank";
  setPosition: Dispatch<SetStateAction<TargetAndTransition>>;
}

export default function NavigationLink({
  children,
  link,
  target = "_self",
  setPosition,
}: NavigationLinkProps) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block px-2 py-1 hover:text-primary-500 transition-colors duration-300 ease-in-out"
    >
      <Link target={target} href={link}>
        {children}
      </Link>
    </li>
  );
}
