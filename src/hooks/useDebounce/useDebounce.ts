import { useEffect, useState } from "react";

export function useDebounce<Type>(initialValue: Type, delay: number) {
  const [value, setValue] = useState<Type>(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setValue(initialValue), delay);
    return () => clearTimeout(timeoutId);
  }, [initialValue, delay]);

  return value;
}
