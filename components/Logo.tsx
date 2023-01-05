import { useTheme } from "./theme";

export const Logo = () => {
  const theme = useTheme();

  return (
    <img
      style={{
        height: 50,
        filter: theme.logoFilter,
        marginRight: 15,
      }}
      src="/pyramid.png"
    ></img>
  );
};
