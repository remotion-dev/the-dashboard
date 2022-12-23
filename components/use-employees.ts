import { useCompany } from "./company";
import { forOneRedEmployees, remotionEmployees } from "./employees";

export const useEmployees = () => {
  const company = useCompany();
  const employees =
    company === "foronered" ? forOneRedEmployees : remotionEmployees;

  return employees;
};
