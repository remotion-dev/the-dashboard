import Head from "next/head";
import { Header } from "../components/Header";
import { Line } from "../components/Line";
import { Ticker } from "../components/Ticker";
import { useTheme } from "../components/theme";

import dynamic from "next/dynamic";

const ComponentWithNoSSR = dynamic(() => import("../components/Home"), {
  ssr: false,
});

function Hello() {
  return <ComponentWithNoSSR />;
}

export default Hello;
