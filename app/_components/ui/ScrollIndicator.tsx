"use client";

import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollIndicatorProps {
  children: ReactNode;
}

export default function ScrollIndicator({ children }: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 25,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleY,
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          width: 3,
          originY: 0,
          backgroundColor: "#ff901b",
          zIndex: 30,
        }}
      />
      {children}
    </>
  );
}
