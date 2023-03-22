import React from "react";
import { random } from "remotion";
import { useCompany } from "./company";
import { lunchRoulette } from "./employees";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

const container: React.CSSProperties = {
  color: "black",
  background: "#eee",
  padding: 20,
  fontSize: 40,
};

export const LunchMandate = () => {
  const date = useDate("daily");
  const dayOfWeek = new Date(date).getDay();

  // Mit&Ohne must already be ordered by 10:30 AM,
  // Therefore the lunchmaster reveal date is earlier on Thursday.
  const reveal = [11, 0] as const;
  const company = useCompany();

  const taglines = ["Too late!", "Ordered!", "Locked in!"].sort((a, b) => {
    return random(date + a + company) - random(date + company + b);
  });

  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  if (hour < reveal[0] || (hour === reveal[0] && minute <= reveal[1])) {
    return (
      <div
        style={{
          ...container,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          perspective: 10000,
        }}
      >
        <svg
          className="rotate"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: 150,
          }}
          viewBox="0 0 640 512"
        >
          <path d="M96 24c0 26.5 10.5 38.7 25.9 56.1l.4 .4C138.8 99 160 122.9 160 168c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-26.5-10.5-38.7-25.9-56.1l-.4-.4C69.2 93 48 69.1 48 24C48 10.7 58.7 0 72 0S96 10.7 96 24zm112 0c0 26.5 10.5 38.7 25.9 56.1l.4 .4C250.8 99 272 122.9 272 168c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-26.5-10.5-38.7-25.9-56.1l-.4-.4C181.2 93 160 69.1 160 24c0-13.3 10.7-24 24-24s24 10.7 24 24zm208 88c50.7 0 93.6 33.7 107.4 80H308.6c13.8-46.3 56.6-80 107.4-80zM61.7 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H49.9c-.2-17.5 14-32 31.7-32H526.4c17.7 0 31.9 14.5 31.7 32H576c17.7 0 32 14.3 32 32s-14.3 32-32 32H546.3c-20.6 64-66.1 116.7-124.7 147.2l-1.2 9.7c-2.5 20-19.5 35-39.7 35H227.3c-20.2 0-37.2-15-39.7-35l-1.2-9.7C127.8 436.7 82.3 384 61.7 320z" />
        </svg>
        <br></br>
        {"Don't"} forget to order lunch at zwoelfi.com until {reveal[0]}:
        {reveal[1].toString().padEnd(2, "0")} AM!
      </div>
    );
  }

  return (
    <div style={container}>
      <em>{taglines[0]}</em>
      <br></br>
      <br></br>
      <p>The lunch ordering window has been closed for today.</p>
      <p>En guete!</p>
    </div>
  );
};
