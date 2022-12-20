import Head from "next/head";
import { Header } from "../components/Header";
import { Line } from "../components/Line";
import { useTheme } from "./theme";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bottom: 0,
          right: 0,
          backgroundColor: theme.background,
          padding: 24,
        }}
      >
        <Header></Header>
        <Line></Line>
      </div>
    </>
  );
}
