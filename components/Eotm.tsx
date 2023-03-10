/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { random } from "remotion";
import { useCompany } from "./company";
import { forOneRedEmployees, remotionEmployees } from "./employees";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

export const Eotm: React.FC = () => {
  const theme = useTheme();
  const date = useDate("daily");
  const month = date.substring(5, 7);
  const company = useCompany();

  const arr = company === "foronered" ? forOneRedEmployees : remotionEmployees;

  const randomEmployee = arr[Math.floor(random(month) * arr.length)];

  return (
    <div
      style={{
        border: "4px solid #000",
        background: theme.background,
        flex: 2,
        color: theme.color,
        padding: 12,
      }}
    >
      <img
        style={{
          height: 200,
          width: 200,
          float: "left",
          filter: "grayscale(100%)",
          marginRight: 20,
        }}
        src={randomEmployee.picture}
      ></img>
      <h3 style={{ color: "blue" }}>Employee of the month</h3>
      <h1>{randomEmployee.name}</h1>
      <h3>
        {new Intl.DateTimeFormat("en-US", {
          month: "long",
          year: "numeric",
        }).format(new Date(date))}
      </h3>
      <br></br>
      <p
        style={{
          fontSize: 24,
        }}
      >
        {randomEmployee.employeeOfTheMonth}
      </p>
    </div>
  );
};
