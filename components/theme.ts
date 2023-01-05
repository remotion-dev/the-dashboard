import { use, useEffect, useState } from "react";

export type Theme = {
  background: string;
  color: string;
  logoFilter: string;
};

const darkTheme = {
  background: "#000",
  color: "#fff",
  logoFilter: "invert(100%)",
};
const lightTheme = { background: "#fff", color: "#000", logoFilter: "" };

const getTheme = () => {
  if (new Date().getHours() >= 17) {
    return darkTheme;
  }
  if (new Date().getHours() <= 7) {
    return darkTheme;
  }

  return lightTheme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => getTheme());

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(getTheme());
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, [theme]);

  return theme;
};
