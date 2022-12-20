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
      <img src="/logo.png" style={{ height: 30, marginTop: 0 }}></img>
      <p>Welcome to For One Red Corporation!</p>
      <div style={{ flex: 1 }}></div>
      <Time></Time>
    </div>
  );
};
