import React from "react";
import Chart from "./Chart";
import HeadChart from "./HeadChart";
// تسجيل المكونات
const BarChart = () => {
  return (
    <div className="w-full overflow-x-auto rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <HeadChart />
      <Chart />
    </div>
  );
};

export default BarChart;
