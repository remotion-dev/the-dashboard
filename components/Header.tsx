import { useTheme } from "./theme";
import { Time } from "./Time";

export const Header = () => {
  const theme = useTheme();
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
      <div>Welcome to For One Red Corporation!</div>
      <div style={{ flex: 1 }}></div>
      <Time></Time>
    </div>
  );
};
