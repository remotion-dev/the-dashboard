import React from "react";
import { useTheme } from "../pages/theme";

export const Line: React.FC = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        height: 10,
        backgroundImage: `linear-gradient(to right, ${theme.color}, transparent)`,
        marginTop: 10,
      }}
    ></div>
  );
};
