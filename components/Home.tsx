import Head from "next/head";
import { useTheme } from "./theme";
import { Header } from "./Header";
import { Line } from "./Line";
import { Ticker } from "./Ticker";
import { Lunch } from "./Lunch";
import { Eotm } from "./Eotm";
import { LunchMandate } from "./LunchMandate";

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
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 24,
                paddingRight: 24,
                display: "flex",
                height: "100%",
              }}
            >
              <Eotm></Eotm>
              <div style={{ width: 20 }}></div>
              <Lunch></Lunch>
            </div>
          </div>
          <div style={{ height: 20 }}></div>
          <div
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 24,
                paddingRight: 24,
                display: "flex",
                height: "100%",
              }}
            >
              <LunchMandate></LunchMandate>
              <div style={{ width: 20 }}></div>
            </div>
          </div>
          <div style={{ height: 20 }}></div>
          <Ticker></Ticker>
        </div>
      </div>
    </>
  );
}
