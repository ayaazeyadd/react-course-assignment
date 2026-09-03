import { useState, useEffect } from "react";

/**
 * Custom Hook: usePersistedFilter
 * Combines useState + useEffect to keep the currently selected
 * filter tab ("all" | "pass" | "fail") saved in localStorage,
 * so it's remembered the next time the page loads.
 */
function usePersistedFilter(key = "student-dashboard-filter", defaultValue = "all") {
  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, filter);
  }, [key, filter]);

  return [filter, setFilter];
}

export default usePersistedFilter;
