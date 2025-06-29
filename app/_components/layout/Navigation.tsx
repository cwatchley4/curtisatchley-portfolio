"use client";

import { useState } from "react";

import NavigationLink from "./NavigationLink";
import NavigationCursor from "./NavigationCursor";
import { TargetAndTransition } from "framer-motion";

export default function Navigation() {
  const [position, setPosition] = useState<TargetAndTransition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav>
      <ul
        onMouseLeave={() => {
          setPosition((state) => ({ ...state, opacity: 0 }));
        }}
        className="relative w-fit gap-4 hidden md:flex"
      >
        <NavigationLink setPosition={setPosition} link="#about">
          About
        </NavigationLink>
        <NavigationLink setPosition={setPosition} link="#projects">
          Projects
        </NavigationLink>
        <NavigationLink setPosition={setPosition} link="#contact">
          Contact
        </NavigationLink>
        <NavigationLink
          setPosition={setPosition}
          link="https://billing.stripe.com/p/login/4gw8Abf8M3wIb2E9AA"
          target="_blank"
        >
          Client Portal
        </NavigationLink>
        <NavigationCursor position={position} />
      </ul>
    </nav>
  );
}
