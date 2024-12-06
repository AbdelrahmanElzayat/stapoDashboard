import ReqTable from "@/components/HomeComponents/RequirementssTable/ReqTable";
import BarChart from "@/components/HomeComponents/pipesCharts/BarChart";
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";

export default function Home() {
  return (
    <div>
      <HeaderStatistics />
      <BarChart />
      <ReqTable />
    </div>
  );
}
