import { useEffect, useState } from "react";
import { AbsoluteFill } from "remotion";
import { useTheme } from "./theme";

export const Unwrapped = () => {
  const [data, setData] = useState({ renders: 0 });
  const theme = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("https://www.githubunwrapped.com/api/videos")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [data]);

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
        }}
      >
        LIVE COUNTER
      </div>
      <div
        style={{
          fontSize: 100,
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        {data.renders}
      </div>
      <p
        style={{
          fontSize: 20,
        }}
      >
        videos have been served to our wonderful users.
      </p>
    </div>
  );
};
