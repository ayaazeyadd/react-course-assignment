import React, { createContext, useContext, useState } from "react";

// Context API Requirement:
// Manages a shared "theme" feature (Light / Dark) that any component
// in the tree can read/update without prop-drilling.

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // "light" | "dark"

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook wrapper around useContext — components call useTheme()
// instead of importing useContext + ThemeContext everywhere.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeContext;
