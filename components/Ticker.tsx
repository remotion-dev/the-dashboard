import React, { useMemo } from "react";
import { useTheme } from "./theme";
import { Quote, quotes } from "./quotes";
import { random } from "remotion";
import { useDate } from "./use-date";
import { useCompany } from "./company";

const randomMessages = [
  "Please don't leave your empty coffee cups on the table.",
  "Please upload your lunch expenses to the company account.",
  "Always ask yourself: Is this good for the company?",
  "Remember: You are not a number.",
  "Always be respectful and professional towards your colleagues and clients.",
  "Take breaks when needed, but make sure to inform your team if you'll be away from your desk for an extended period of time.",
  "If you need assistance with a task, don't hesitate to ask for help.",
  "Please ensure to turn off all electronics (including your computer) at the end of the workday.",
  "Tip: Keep your workstation clean and organized to maintain a professional appearance.",
  "Reminder: Use company resources wisely and avoid unnecessary printing or wasting supplies.",
  "Great personalities own up to their mistakes and take steps to correct it.",
  "Remember: Always follow proper safety procedures to prevent accidents and injuries.",
  "Make sure to lock your computer when you are away from your desk.",
  "Be proactive and take initiative to suggest improvements or new ideas to your team or supervisor.",
  "Always follow proper dress code and grooming guidelines for the workplace.",
  "Use company email appropriately and avoid using it for personal communication.",
  "Attend all mandatory training sessions and stay current on industry best practices.",
  "Respect the confidentiality of company information and do not share it with anyone outside of the organization.",
  "Communicate effectively and professionally with your team and clients.",
  "Keep your work area free of clutter and hazards to maintain a safe environment.",
  "Be aware of and adhere to all company policies and procedures, including those related to security and data protection.",
  "Respect confidentiality and handle sensitive information with care.",
  "Avoid multitasking as it can lead to decreased productivity and increased errors.",
  "Update your calendar and schedule regularly to ensure that you are aware of all upcoming deadlines and meetings.",
  "Always double-check your work before submitting it.",
  "Be open to feedback and use it as an opportunity to improve and grow.",
];

export const Ticker: React.FC = () => {
  const theme = useTheme();
  const date = useDate();
  const company = useCompany();

  const tickerItems = useMemo(
    () =>
      [
        ...new Array(9)
          .fill(true)
          .map(
            (_, i) =>
              quotes[Math.floor(random(date + i) * quotes.length)] as Quote
          )
          .map((q) => `"${q.quote}" - ${q.author}`),
        ...randomMessages
          .sort((q, b) => random(q + date + "hi") - random(b + date + "hi"))
          .slice(0, 10),
      ].sort((q, b) => random(q + date + company) - random(b + date + company)),
    [company, date]
  );

  return (
    <div
      style={{
        height: 80,
        backgroundColor: theme.color,
        fontWeight: "bold",
        lineHeight: "80px",
      }}
    >
      {/**
       * @ts-expect-error */}
      <marquee
        style={{
          color: theme.background,
          fontSize: 24,
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
