import React, {useEffect, useState} from 'react';

export default function useDebounce<T extends string>({
  value,
  milliSeconds,
}: {
  value: T;
  milliSeconds: number;
}) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, milliSeconds);

    return () => clearTimeout(timer);
  }, [value, milliSeconds]);
  return debounceValue;
}
