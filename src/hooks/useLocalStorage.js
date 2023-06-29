// useLocalStorage.js

import { useEffect, useState } from 'react';

const PREFIX = 'codepen-clone-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    // Get the value from local storage if it exists
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    // Use the initial value if no value is found in local storage
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    // Store the value in local storage
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
