import { useState, useEffect } from "react";

export function useStickyStateSideBar(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue =
      typeof window !== "undefined" ? window.localStorage.getItem(key) : "";
    return stickyValue && stickyValue !== undefined
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
