"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import IntroSequence from "@/components/IntroSequence";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasPlayed = sessionStorage.getItem("introPlayed");
    if (!hasPlayed) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-brand-dark selection:bg-brand-orange/30">
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroSequence key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Hero />
          <ServicesGrid />
        </>
      )}
    </main>
  );
}