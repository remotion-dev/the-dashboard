import { random } from "remotion";
import { entrepreneurQuotes } from "./entrepreneur-quotes";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

export const DailyMotivation = () => {
  const date = useDate();
  const theme = useTheme();

  const quote =
    entrepreneurQuotes[Math.floor(random(date) * entrepreneurQuotes.length)];

  return (
    <div
      style={{
        background: theme.color,
        color: theme.background,
        padding: 16,
      }}
    >
      <img src="/light.png" style={{ height: 80, float: "left" }}></img>
      <p
        style={{
          fontFamily: "serif",
          fontSize: 30,
          marginTop: 10,
        }}
      >
        {quote.text}
      </p>
      <p
        style={{
          clear: "left",
          marginTop: 20,
        }}
      >
        – {quote.from}
      </p>
    </div>
  );
};
