import ReqTable from "@/components/HomeComponents/RequirementssTable/ReqTable";
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import MoreOrders from "@/components/orderComponents/moreOrders/MoreOrders";
import { HeaderInfoType } from "@/utils/types/HeaderInfoType";
import React from "react";

const page = () => {
  const headerInfo: HeaderInfoType[] = [
    {
      title: "إجمالي الطلبات",
      total: 753422,
    },
    {
      title: "طلبات اليوم",
      total: 305,
    },
    {
      title: "إجمالي المبيعات",
      total: 830000,
      currency: "ر.س",
    },
    {
      title: "المبيعات اليوم",
      total: 35300,
      currency: "ر.س",
    },
    {
      title: "معدل التحويل",
      total: 23,
      currency: "%",
    },
  ];
  return (
    <div>
      <HeaderStatistics
        title={"الطلبـات"}
        des={"تصفح الطلبات او قم بإنشاء طلب جديد"}
        headerInfo={headerInfo}
      />
      <MoreOrders />
      <ReqTable />
      <ReqTable />
    </div>
  );
};

export default page;
