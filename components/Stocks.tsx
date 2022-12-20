import React, { useEffect, useState } from "react";
import { useTheme } from "./theme";

export const Stocks: React.FC<{
  type: "nasdaq" | "sp500";
}> = ({ type }) => {
  const [price, setPrice] = useState(0);
  const [close, setPrevClose] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    fetch(type === "nasdaq" ? "/api/nasdaq" : "/api/snp")
      .then((res) => res.json())
      .then((res) => {
        setPrice(res.response.chart.result[0].meta.regularMarketPrice);
        setPrevClose(res.response.chart.result[0].meta.previousClose);
      });
  }, [type]);

  const percent = (price / close - 1) * 100;

  if (price === 0) {
    return <div style={{ flex: 1 }}></div>;
  }

  return (
    <div
      style={{
        color: theme.color,
        flex: 1,
        border: "3px outset gray",
        padding: 20,
      }}
    >
      <div
        style={{
          fontWeight: "bold",
        }}
      >
        {type === "sp500" ? "S&P 500" : "Nasdaq 100"}
      </div>
      <h1 style={{ marginTop: 6 }}>
        {price}{" "}
        <span
          style={{
            fontSize: "0.6em",
            color: percent >= 0 ? "green" : "red",
          }}
        >
          {percent.toFixed(2)}%
        </span>
      </h1>
    </div>
  );
};
