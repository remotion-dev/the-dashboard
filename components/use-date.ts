import { useEffect, useState } from "react";

const getD = () =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

export const useDate = () => {
  const [date, setTheme] = useState<string>(() => getD());

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(getD());
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return date;
};
