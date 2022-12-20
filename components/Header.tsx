/* eslint-disable @next/next/no-img-element */
import { useCompany } from "./company";
import { useTheme } from "./theme";
import { Time } from "./Time";

export const Header = () => {
  const theme = useTheme();
  const company = useCompany();

  return (
    <div
      style={{
        fontSize: 30,
        color: theme.color,
        fontWeight: "bolder",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <p>
        Welcome to {company === "foronered" ? "For One Red" : "The Remotion"}{" "}
        Corporation!
      </p>
      <div style={{ flex: 1 }}></div>
      <Time></Time>
    </div>
  );
};
