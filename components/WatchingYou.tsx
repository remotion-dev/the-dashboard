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

const randomMotivation = [
  'You started so well, it would be a shame to throw it all away now.',
  'The only thing that overcomes hard luck is hard work.',
  'Start where you are. Use what you have. Do what you can.',
  'The only thing that overcomes hard luck is hard work.',
  'If everyone is moving forward, then success takes care of itself.',
  'How wonderful it is that nobody needs wait a single moment before starting to improve the world.',
  'Your most important work is always ahead of you',
  'A dream doesn’t become reality through magic; it takes sweat, determination and hard work.',
  'The only place where success comes before work is in the dictionary.',
  'A boat doesn’t go forward if you dont row.',
  'Perfection is not attainable, but if we chase perfection, we can catch excellence.'
]

export const WatchingYou = () => {
  const date = useDate("daily");

  const employeeNr = Math.floor(random(date) * 50 +20)

  const performance = Math.floor(random(date)*50)

  const positive = random(date)

  return <div style={container}>
      <div
        style={{
          display: "flex",
          width: 720,
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            marginBottom: 40,
          }}
        >
          {positive > 0.5 ? 'Congrats on your' : 'Watch your'} KPIs employee #{employeeNr}, you are {performance}% {positive > 0.5 ? 'ahead of' : 'behind'}  your peers.
        </h1>
        <h2 style = {{fontWeight: 'bold', marginBottom: 24, color: 'grey'}}>
          Use the following key-takeaway from our last performance workshop:
        </h2>
        <h2>
        {`👍 ${randomMotivation[performance % 11]}`}
        </h2>
    </div>
    </div>

};
