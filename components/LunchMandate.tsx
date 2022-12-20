import { random } from "remotion";
import { lunchRoulette } from "./employees";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

export const LunchMandate = () => {
  const date = useDate();
  const theme = useTheme();

  const lunchMandate = lunchRoulette.sort((a, b) => {
    return random(date + a.name) - random(date + b.name);
  });

  const taglines = [
    "We trust in",
    "What an honor!",
    "We have a winner!",
    "We have nominated:",
  ].sort((a, b) => {
    return random(date + a) - random(date + b);
  });

  return (
    <div
      style={{
        color: "black",
        background: "#eee",
        padding: 20,
      }}
    >
      <em> {taglines[0]}</em>
      <h1
        style={{
          marginBottom: 5,
        }}
      >
        {lunchMandate[0].name}
      </h1>
      <div>
        <div>
          <strong> has been delegated to pick up lunch today.</strong>
        </div>{" "}
        <br></br> Deputies: {lunchMandate[1].name.split(" ")[0]},{" "}
        {lunchMandate[2].name.split(" ")[0]}.
      </div>
    </div>
  );
};
