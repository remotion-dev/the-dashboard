import dynamic from "next/dynamic";

const ComponentWithNoSSR = dynamic(() => import("../components/Home"), {
  ssr: false,
});

function Hello() {
  return <ComponentWithNoSSR />;
}

export default Hello;
