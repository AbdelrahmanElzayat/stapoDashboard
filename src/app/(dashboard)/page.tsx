import ReqTable from "@/components/HomeComponents/RequirementssTable/ReqTable";
import BarChart from "@/components/HomeComponents/pipesCharts/BarChart";
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import { HeaderInfoType, Order } from "@/utils/types/HeaderInfoType";
import homeData from "../../Data/HomeDataTable.json";

export default function Home() {
  const headerInfo: HeaderInfoType[] = [
    {
      title: "إجمالي المبيعات",
      total: 830000,
      currency: "ر.س",
    },
    {
      title: "إجمالي الطلبات",
      total: 753422,
    },
    {
      title: "عدد العملاء",
      total: 753422,
    },
    {
      title: "الزيارات",
      total: 839420,
    },
    {
      title: "معدل التحويل",
      total: 23,
      currency: "%",
    },
  ];

  const data: Order[] = homeData;
  return (
    <div>
      <HeaderStatistics
        title={"الرئيسية"}
        des={"تصفـح المبيعـات و الطلبات الخاصة بمتجرك"}
        headerInfo={headerInfo}
      />
      <BarChart />
      <ReqTable data={data} label={"طلبـات المتجـر"} />
    </div>
  );
}
