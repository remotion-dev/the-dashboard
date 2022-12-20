import { useEffect, useState } from "react";

type Company = "foronered" | "remotion";

export const useCompany = (): Company => {
  const [company, setCompany] = useState<Company>("remotion");

  useEffect(() => {
    const interval = setInterval(() => {
      setCompany((c) => (c === "remotion" ? "foronered" : "remotion"));
    }, 1000 * 2 * 60);

    return () => {
      clearInterval(interval);
    };
  });

  return company;
};
