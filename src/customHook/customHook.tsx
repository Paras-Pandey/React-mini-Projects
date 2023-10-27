import { useState, useEffect } from "react";

export function useLocalStorage(key: string, value: string) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return storedValue;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, state.toString());
  }, [key, state]);

  return [state, setState];
}
