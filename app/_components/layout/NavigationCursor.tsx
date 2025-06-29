"use client";

import { motion, TargetAndTransition } from "framer-motion";

interface NavigationCursorProps {
  position: TargetAndTransition;
}

export default function NavigationCursor({ position }: NavigationCursorProps) {
  return (
    <motion.li
      initial={false}
      animate={position}
      className="absolute bottom-0 h-0.5 w-20 rounded-full z-10 bg-primary-500"
    />
  );
}
