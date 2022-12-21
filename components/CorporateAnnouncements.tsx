import { random } from "remotion";
import { bossQuotes } from "./bossQuotes";
import { useCompany } from "./company";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

export const CorporateAnnouncements = () => {
  const date = useDate();
  const theme = useTheme();
  const company = useCompany();

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
          marginLeft: 24,
        }}
        src={company === "foronered" ? "luke2.jpeg" : "jonny.png"}
      ></img>
      <div style={{ width: 20 }}></div>
      <b style={{ fontSize: 30 }}>Message from the CEO</b>
      <p style={{ marginRight: 30, fontSize: 24 }}>
        {bossQuotes[Math.floor(random(date + company) * bossQuotes.length)]}
      </p>
    </div>
  );
};
