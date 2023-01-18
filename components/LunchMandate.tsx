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
  fontSize: 24,
};

export const LunchMandate = () => {
  const date = useDate("daily");
  const theme = useTheme();
  const company = useCompany();

  const lunchMandate = lunchRoulette.sort((a, b) => {
    return random(date + a.name) - random(date + b.name);
  });

  const taglines = [
    "The selected one",
    "What an honor!",
    "Nomination",
    "We have a winner!",
  ].sort((a, b) => {
    return random(date + a + company) - random(date + company + b);
  });

  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  if (hour < 10 || (hour === 10 && minute <= 30)) {
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
          style={{
            height: 150,
          }}
          className="rotate"
          viewBox="0 0 512 512"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
        </svg>
        <br></br>
        The lunch master will be revealed at 10:30 AM.
      </div>
    );
  }

  return (
    <div style={container}>
      <em>{taglines[0]}</em>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <img
          style={{
            height: 150,
            marginRight: 20,
          }}
          src={lunchMandate[0].picture}
        ></img>

        <h1
          style={{
            marginBottom: 5,
          }}
        >
          {lunchMandate[0].name}
        </h1>
      </div>
      <br></br>
      <div>
        <div>
          <strong> has been delegated to pick up lunch today.</strong>
        </div>{" "}
        <br></br>
        {lunchMandate[1].name.split(" ")[0]},{" "}
        {lunchMandate[2].name.split(" ")[0]} and{" "}
        {lunchMandate[3].name.split(" ")[0]} have been nominated as deputies.
      </div>
    </div>
  );
};
