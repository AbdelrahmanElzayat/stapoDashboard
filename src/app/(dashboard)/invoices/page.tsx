import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import React from "react";
import InvoicesData from "../../../Data/InvoicesData.json";
import { HeaderInfoType, InvoicesType } from "@/utils/types/HeaderInfoType";
import InvoicesTable from "@/components/invoicesComponents/InvoicesTable";

const page = () => {
  const headerInfo: HeaderInfoType[] = [
    {
      title: "إجمالي العملاء",
      total: 31400,
    },
    {
      title: "عملاء هذا الشهر",
      total: 235,
    },
    {
      title: "عملاء برامج الولاء",
      total: 2938,
    },
  ];
  const data: InvoicesType[] = InvoicesData;

  return (
    <div>
      <HeaderStatistics
        title={"الفواتيـر"}
        des={"إدارة الفواتيـر الخاصة بالمتجـر الخاص بك"}
        headerInfo={headerInfo}
      />
      <InvoicesTable data={data} label={"قائمة الفواتير"} />
    </div>
  );
};

export default page;
