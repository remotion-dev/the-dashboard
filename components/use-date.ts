import { useEffect, useState } from "react";

const getD = () =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

const getFrequentD = () =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}-${new Date().getHours()}`;

export const useDate = (frequency: "daily" | "hourly") => {
  const [date, setTheme] = useState<string>(() =>
    frequency === "hourly" ? getFrequentD() : getD()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(frequency === "hourly" ? getFrequentD() : getD());
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, [date, frequency]);

  return date;
};
