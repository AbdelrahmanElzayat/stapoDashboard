import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import React from "react";
import CouponsData from "../../../Data/CouponsData.json";
import DataLoyaltyTable from "../../../Data/loyaltyData.json";
import Discounts from "../../../Data/Discounts.json";
import {
  CouponsData as typeCouponTable,
  HeaderInfoType,
  LoyaltyData as typeLoyaltyData,
  DiscountsType,
} from "@/utils/types/HeaderInfoType";
import CouponTable from "@/components/marketingComponents/couponTable/CouponTable";
import LoyaltyTable from "@/components/marketingComponents/LoyaltyTable/LoyaltyTable";
import DiscountTable from "@/components/marketingComponents/discountsTable/DiscountTable";

const page = () => {
  const headerInfo: HeaderInfoType[] = [
    {
      title: "أكواد الخصم",
      total: 13,
    },
    {
      title: "برامـج الولاء",
      total: 3,
    },
    {
      title: "عروض التخفيضات",
      total: 5,
    },
  ];
  const data: typeCouponTable[] = CouponsData;
  const loyaltyData: typeLoyaltyData[] = DataLoyaltyTable;
  const discountData: DiscountsType[] = Discounts;

  return (
    <div>
      <HeaderStatistics
        title={"التسويـق"}
        des={"قم بمتابعة البرامج و اكواد الخصم الخاصة بك"}
        headerInfo={headerInfo}
      />
      <CouponTable data={data} label={"اكواد الخصم"} />
      <div className="flex flex-col lg:flex-row gap-2 w-full overflow-auto">
        <LoyaltyTable data={loyaltyData} label={"برامج الولاء"} />
        <DiscountTable data={discountData} label={"الخصومات"} />
      </div>
    </div>
  );
};

export default page;
