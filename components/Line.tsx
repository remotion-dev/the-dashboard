import React from "react";
import { useCompany } from "./company";
import { useTheme } from "./theme";

export const Line: React.FC = () => {
  const theme = useTheme();
  const company = useCompany();
  return (
    <div
      style={{
        height: 10,
        backgroundImage: `linear-gradient(to right, ${
          company === "foronered" ? "black" : "orange"
        }, transparent)`,
        marginTop: 10,
        marginBottom: 20,
      }}
    ></div>
  );
};
