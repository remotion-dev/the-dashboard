import { Menu } from "./Menu";
import { useTheme } from "./theme";

export const Lunch: React.FC = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        background: "#ccc",
        flex: 1,
        color: "black",
        padding: 20,
      }}
    >
      <h1
        style={{
          fontFamily: "serif",
          fontStyle: "italic",
          paddingBottom: 10,
        }}
      >
        Menu
      </h1>
      <Menu></Menu>
    </div>
  );
};
