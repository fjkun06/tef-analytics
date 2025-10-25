"use client";
import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function HomeRotateWords({
  words,
  speed,
}: {
  words: string[];
  speed?: number;
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, speed || 5000);
    return () => clearInterval(interval);
  }, [speed, words.length]);

  return (
    <div className="flex w-fit items-center justify-center gap-1.5 text-center font-bold tracking-tighter text-blue-600">
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
