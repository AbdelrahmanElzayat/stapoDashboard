import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import React from "react";
import ClientsData from "../../../Data/ClientsData.json";
import { ClientsType, HeaderInfoType } from "@/utils/types/HeaderInfoType";
import ClientsTable from "@/components/clientsComponents/ClientsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stapo - Clients",
};

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
  const data: ClientsType[] = ClientsData;

  return (
    <div>
      <HeaderStatistics
        title={"العمـلاء"}
        des={"إدارة قاعدة بيانات العملاء"}
        headerInfo={headerInfo}
      />
      <ClientsTable data={data} label={"قائمة العملاء"} />
    </div>
  );
};

export default page;
