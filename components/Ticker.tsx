import React, { useMemo } from "react";
import { useTheme } from "./theme";
import { Quote, quotes } from "./quotes";
import sample from "lodash/sample";
import { random } from "remotion";
import { useDate } from "./use-date";

export const Ticker: React.FC = () => {
  const theme = useTheme();
  const date = useDate();

  const tickerItems = useMemo(
    () =>
      [
        ...new Array(6)
          .fill(true)
          .map(
            (_, i) =>
              quotes[Math.floor(random(date + i) * quotes.length)] as Quote
          )
          .map((q) => `"${q.quote}" - ${q.author}`),
      ].sort((q) => random(q + date) - 0.5),
    [date]
  );

  return (
    <div
      style={{
        height: 50,
        backgroundColor: theme.color,
        fontWeight: "bold",
        lineHeight: "50px",
      }}
    >
      {/**
       * @ts-expect-error */}
      <marquee
        style={{
          color: theme.background,
        }}
      >
        {tickerItems.map((q) => {
          return (
            <div
              key={q}
              style={{
                minWidth: "100%",
                display: "inline-block",
              }}
            >
              {q}
            </div>
          );
        })}
        {/**
         * @ts-expect-error */}
      </marquee>
    </div>
  );
};
