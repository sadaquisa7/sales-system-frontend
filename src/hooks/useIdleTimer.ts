"use client";
import { useEffect, useRef, useCallback } from "react";

interface UseIdleTimerOptions {
  idleMinutes?: number;
  warningMinutes?: number;
  onIdle: () => void;
  onWarning: () => void;
  onActivity: () => void;
}

const ACTIVITY_EVENTS = [
  "mousemove",
  "mousedown",
  "keydown",
  "touchstart",
  "scroll",
  "click",
];

export function useIdleTimer({
  idleMinutes = 15,
  warningMinutes = 2,
  onIdle,
  onWarning,
  onActivity,
}: UseIdleTimerOptions) {
  const idleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warningTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isWarningActive = useRef(false);

  const clearTimers = useCallback(() => {
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    if (warningTimeout.current) clearTimeout(warningTimeout.current);
  }, []);

  const resetTimers = useCallback(() => {
    clearTimers();
    isWarningActive.current = false;

    const warningDelay = (idleMinutes - warningMinutes) * 60 * 1000;
    const idleDelay = idleMinutes * 60 * 1000;

    warningTimeout.current = setTimeout(() => {
      isWarningActive.current = true;
      onWarning();
    }, warningDelay);

    idleTimeout.current = setTimeout(() => {
      onIdle();
    }, idleDelay);
  }, [idleMinutes, warningMinutes, onIdle, onWarning, clearTimers]);

  const handleActivity = useCallback(() => {
    if (isWarningActive.current) return;
    resetTimers();
    onActivity();
  }, [resetTimers, onActivity]);

  const continueSession = useCallback(() => {
    isWarningActive.current = false;
    onActivity();
    resetTimers();
  }, [resetTimers, onActivity]);

  useEffect(() => {
    resetTimers();
    ACTIVITY_EVENTS.forEach((event) =>
      window.addEventListener(event, handleActivity, { passive: true })
    );

    return () => {
      clearTimers();
      ACTIVITY_EVENTS.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
    };
  }, [resetTimers, handleActivity, clearTimers]);

  return { continueSession };
}
