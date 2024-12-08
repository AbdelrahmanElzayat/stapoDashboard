import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import { HeaderInfoType, Products } from "@/utils/types/HeaderInfoType";
import React from "react";
import productsData from "../../../Data/productsData.json";
import ProductsTable from "@/components/productsComponents/productsTable/ProductsTable";

const page = () => {
  const headerInfo: HeaderInfoType[] = [
    {
      title: "إجمالي المنتجـات",
      total: 1400,
    },
    {
      title: "خارج المخزون",
      total: 143,
    },
    {
      title: "منخفضـة المخزون",
      total: 235,
    },
    {
      title: "معروض بالمتجر",
      total: 1380,
    },
    {
      title: "قيد الانتظار",
      total: 20,
    },
  ];

  const data: Products[] = productsData;

  return (
    <div>
      <HeaderStatistics
        title={"المنتجـات"}
        des={"أدارة منتجاتـك او إضافة المزيـد"}
        headerInfo={headerInfo}
      />
      <ProductsTable data={data} label={"قائمـة المنتجـات"} />
    </div>
  );
};

export default page;
