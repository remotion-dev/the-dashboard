import { random } from "remotion";
import { bossQuotes } from "./bossQuotes";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

export const CorporateAnnouncements = () => {
  const date = useDate();
  const theme = useTheme();

  return (
    <div
      style={{
        color: theme.color,
        flex: 1,
      }}
    >
      <img
        style={{
          height: 200,
          float: "right",
          filter: "grayscale(100%)",
        }}
        src="luke2.jpeg"
      ></img>
      <div style={{ width: 20 }}></div>
      <b style={{ fontSize: 30 }}>Message from the CEO</b>
      <p style={{ marginRight: 30 }}>
        {bossQuotes[Math.floor(random(date) * bossQuotes.length)]}
      </p>
    </div>
  );
};
