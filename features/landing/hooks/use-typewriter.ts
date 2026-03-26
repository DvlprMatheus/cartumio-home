"use client";

import { useEffect, useState } from "react";

export type UseTypewriterOptions = {
  speedBaseMs?: number;
  jitterMs?: number;
  startDelayMs?: number;
};

export function useTypewriter(
  fullText: string,
  options: UseTypewriterOptions = {},
) {
  const {
    speedBaseMs = 32,
    jitterMs = 18,
    startDelayMs = 260,
  } = options;

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) {
      const id = window.setTimeout(() => {
        setTypedText(fullText);
        setIsTyping(false);
      }, 0);

      return () => window.clearTimeout(id);
    }

    let cancelled = false;
    let idx = 0;

    const resetId = window.setTimeout(() => {
      setTypedText("");
      setIsTyping(true);
    }, 0);

    const tick = () => {
      if (cancelled) return;
      idx += 1;
      setTypedText(fullText.slice(0, idx));

      if (idx >= fullText.length) {
        setIsTyping(false);
        return;
      }

      const jitter = Math.round(Math.random() * jitterMs);
      window.setTimeout(tick, speedBaseMs + jitter);
    };

    const startTimeout = window.setTimeout(tick, startDelayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimeout);
      window.clearTimeout(resetId);
    };
  }, [fullText, speedBaseMs, jitterMs, startDelayMs]);

  return { typedText, isTyping };
}
