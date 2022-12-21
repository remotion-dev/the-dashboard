import React from "react";
import { useTheme } from "./theme";

export const Line: React.FC = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        height: 10,
        backgroundImage: `linear-gradient(to right, blue, transparent)`,
        marginTop: 10,
        marginBottom: 20,
      }}
    ></div>
  );
};
