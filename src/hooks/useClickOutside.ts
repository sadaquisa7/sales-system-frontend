// useClickOutside.ts
import { useEffect, RefObject } from "react";

export function useClickOutside<T extends HTMLElement | null>(
  ref: RefObject<T>, // Changed to allow T to be null or any HTMLElement
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
