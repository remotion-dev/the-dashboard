import Head from "next/head";
import { useTheme } from "./theme";
import { Header } from "./Header";
import { Line } from "./Line";
import { Ticker } from "./Ticker";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <div>
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
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <Header></Header>
            <Line></Line>
          </div>
          <div
            style={{
              flex: 1,
            }}
          ></div>
          <Ticker></Ticker>
        </div>
      </div>
    </>
  );
}
