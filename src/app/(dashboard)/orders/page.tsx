import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import MoreOrders from "@/components/orderComponents/moreOrders/MoreOrders";
import React from "react";
import homeData from "../../../Data/OrderDataTable.json";
import dataAbandonedd from "../../../Data/AbandonedbasketsTable.json";
import {
  HeaderInfoType,
  Order,
  AbandonedData,
} from "@/utils/types/HeaderInfoType";
import OrderTable from "@/components/orderComponents/tablesComponents/OrderTable";
import AbandonedTable from "@/components/orderComponents/tablesComponents/AbandonedTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stapo - Orders",
};
const page = () => {
  const data: Order[] = homeData;
  const dataAbandoned: AbandonedData[] = dataAbandonedd;

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
      <OrderTable data={data} label={"طلبـات المتجـر"} />
      <AbandonedTable data={dataAbandoned} label={"السلال المتروكة"} />
    </div>
  );
};

export default page;
