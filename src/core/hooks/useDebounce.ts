import { useEffect, useState } from "react";
import { DEBOUNCE_TIME } from "../constants/debounce-time";

export default function useDebounce<T>(value: T, delay = DEBOUNCE_TIME) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}