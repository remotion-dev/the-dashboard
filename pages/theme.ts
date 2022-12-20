import { use, useEffect, useState } from "react";

export type Theme = {
  background: string;
  color: string;
};

const darkTheme = { background: "#000", color: "#fff" };
const lightTheme = { background: "#fff", color: "#000" };

const getTheme = () => {
  if (new Date().getHours() >= 18) {
    return darkTheme;
  }
  if (new Date().getHours() <= 8) {
    return darkTheme;
  }

  return lightTheme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(lightTheme);
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, [theme]);

  return theme;
};
