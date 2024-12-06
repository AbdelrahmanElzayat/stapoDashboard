"use client";
import React, { useState } from "react";
import style from "./Chart.module.css";

const HeadChart = () => {
  const currentYear = new Date().getFullYear(); // السنة الحالية
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i); // قائمة من السنوات الأخيرة (من السنة الحالية وحتى 10 سنوات ماضية)

  const [selectedYear, setSelectedYear] = useState(currentYear); // الحالة التي تخزن السنة المختارة

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(event.target.value)); // تغيير السنة بناءً على الاختيار
  };
  return (
    <div className="flex items-center justify-between mb-4">
      <h2
        className={`font-bold text-gray-800 lg:custom-stroke text-sm  lg:text-lg ${style.paidTitle}`}
      >
        مبيعات المتجر
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            className="pl-2 lg:pl-5 text-lg lg:text-sm pr-2 py-1 lg:py-2 rounded-lg border-[1px] border-[#E6E6E6] custom-stroke outline-none"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === currentYear ?'السنة الحالية' : year }
              </option>
            ))}
          </select>
        </div>
        <button className="text-xs lg:text-sm font-normal py-1 lg:py-2 px-2 lg:px-4 bg-[#F5D446] rounded-lg hover:bg-[#F5D446BC] transition-all">
          تصدير
        </button>
      </div>
    </div>
  );
};

export default HeadChart;
