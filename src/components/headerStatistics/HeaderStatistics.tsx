import { HeaderInfoType } from "@/utils/types/HeaderInfoType";
import React from "react";

interface HeaderStatisticsProps {
  title: string;
  des: string;
  headerInfo?: HeaderInfoType[];
}
const HeaderStatistics = ({
  title,
  des,
  headerInfo,
}: HeaderStatisticsProps) => {
  const length: any = headerInfo?.length;
  return (
    <div className="HeaderStatistics flex flex-col md:flex-row gap-4 justify-between mt-6 w-full">
      <div className="titlePage">
        <h1 className="text-textSecondary text-lg font-extrabold">{title}</h1>
        <span className="text-[13px] text-textSecondary font-light">{des}</span>
      </div>
      <div
        className={`grid grid-cols-3 ${
          length >= 5 ? "md:grid-cols-5" : "md:grid-cols-3"
        }  md:gap-20 gap-5`}
      >
        {headerInfo?.map((item, index) => (
          <div
            key={index}
            className="totalPay flex flex-col relative justify-center gap-1"
          >
            <span className="absolute top-[50%] -translate-y-[50%] -right-5 w-1 h-8 bg-[#F3F6F5]"></span>
            <span className="text-xs text-textSecondary font-light">
              {item?.title}
            </span>
            <span className="text-sm font-semibold text-textSecondary">
              {item?.total} {item?.currency}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderStatistics;
