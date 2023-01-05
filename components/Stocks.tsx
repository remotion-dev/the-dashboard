import React, { useEffect, useState } from "react";
import { useTheme } from "./theme";

export const Stocks: React.FC<{
  type: "bitcoin" | "sp500";
}> = ({ type }) => {
  const [price, setPrice] = useState(0);
  const [close, setPrevClose] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    fetch(type === "bitcoin" ? "/api/bitcoin" : "/api/snp")
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
          fontSize: 30,
        }}
      >
        {type === "sp500" ? "S&P 500" : "Bitcoin"}
      </div>
      <h1 style={{ marginTop: 6, fontSize: 70 }}>
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
