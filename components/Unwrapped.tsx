import { random } from "remotion";
import { useEffect, useState } from "react";
import { AbsoluteFill } from "remotion";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

export const Unwrapped = () => {
  const [data, setStars] = useState(0);
  const date = useDate();
  const theme = useTheme();

  useEffect(() => {
    fetch(`https://api.github.com/repos/remotion-dev/remotion`)
      .then((res) => res.json())
      .then((json) => json.watchers)
      .then((w) => setStars(w))
      .catch((err) => {
        console.log(err);
        setStars(0);
      });
  }, []);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
        flex: 1,
        padding: 20,
        border: "3px outset gray",
        color: theme.color,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          fontSize: 30,
        }}
      >
        <div
          style={{
            display: "inline-block",
            height: 25,
            width: 25,
            backgroundColor: "red",
            borderRadius: 15,
            marginRight: 10,
          }}
        ></div>
        LIVE GITHUB STARS
      </div>
      <div
        style={{
          fontSize: 100,
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        {data}
      </div>
      <p
        style={{
          fontSize: 30,
        }}
      >
        {target(data, date)}
      </p>
    </div>
  );
};

export const target = (currentStars: number, date: string) => {
  const lines = [
    `Can we reach ${Math.round(
      currentStars + random(date) * 500
    )} before the end of the month?`,
    `Can we reach ${Math.round(
      currentStars + random(date) * 100
    )} before the end of the week?`,
    `This is great. We are stars!`,
    `These developers are true stars!`,
    `Those people are stars!`,
    `So many stars!`,
    `Keep on starring!`,
    `We shine like laminat flooring!`,
    `To the moon!`,
    `We are famous.`,
  ];

  return lines[Math.floor(random(date) * lines.length)];
};
