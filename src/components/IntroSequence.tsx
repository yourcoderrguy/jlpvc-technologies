"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootSequence = [
 "Building fast, modern websites...",

"Turning your visitors into customers...",

"Helping your business grow online...",

"Welcome to JLPVC Technologies."
];

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 450); 
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 600); 
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-md px-6 flex flex-col items-start space-y-2">
        {bootSequence.slice(0, currentLine + 1).map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-mono text-sm md:text-base ${
              index === bootSequence.length - 1 ? "text-brand-white font-bold" : "text-brand-orange"
            }`}
          >
            {line}
          </motion.p>
        ))}
        {currentLine < bootSequence.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="w-3 h-5 bg-brand-orange mt-1"
          />
        )}
      </div>
    </motion.div>
  );
}