import { useCompany } from "./company";
import { useTheme } from "./theme";

export const Logo = () => {
  const theme = useTheme();
  const compan = useCompany();

  return (
    <img
      style={{
        height: 50,
        filter: theme.logoFilter,
        marginRight: 15,
      }}
      src={compan === "remotion" ? "/reactlogo.png" : "/pyramid.png"}
    ></img>
  );
};
