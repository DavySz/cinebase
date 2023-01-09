import { useState } from "react";

import { useDebounce } from "../useDebounce/useDebounce";

export function useDebounceState<Type>(initialValue: Type, delay: number) {
  const [value, setValue] = useState<Type>(initialValue);
  const debouncedValue = useDebounce<Type>(value, delay);

  return [value, setValue, debouncedValue] as [Type, typeof setValue, Type];
}
