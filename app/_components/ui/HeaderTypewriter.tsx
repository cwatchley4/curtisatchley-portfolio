"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

interface TypewriterHeaderProps {
  textBody?: string;
  textTypewriter: string[];
  loop?: number;
}

export default function HeaderTypewriter({
  textBody,
  textTypewriter,
  loop = Infinity,
}: TypewriterHeaderProps) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setStart(true);
    }
  }, [isInView]);

  return (
    <h1
      ref={ref}
      className="text-2xl sm:text-3xl md:text-4xl transition-normal duration-300 ease-in-out font-extrabold tracking-wide"
    >
      {textBody}{" "}
      {start && (
        <Typewriter
          words={textTypewriter}
          loop={loop}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      )}
    </h1>
  );
}
