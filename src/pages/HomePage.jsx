import BigNumbers from "../components/charts/BigNumbers";
import DonutGraph from "../components/charts/DonutGraph";
import DottedLineChart from "../components/charts/DottedLineChart";
import HorizontalBarGraph from "../components/charts/HorizontalBarGraph";
import TopItems from "../components/charts/TopItems";
import NavBar from "../components/main/NavBar";
import QuickLinks from "../components/misc/QuickLinks";


export default function HomePage() {

  return <>
          <NavBar />
      <BigNumbers />
      <DottedLineChart />
      <BigNumbers />
      <HorizontalBarGraph />
      <QuickLinks />
      <DonutGraph />
      <TopItems />
  </>
}