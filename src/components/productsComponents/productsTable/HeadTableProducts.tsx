import React from "react";
import searchIcon from "../../../assets/icons/search.svg";
import Image from "next/image";
import style from "../../HomeComponents/RequirementssTable/table.module.css";
interface propsHead {
  label: string;
}
const HeadTableProducts = ({ label }: propsHead) => {
  return (
    <div className="flex items-center justify-between flex-wrap mb-4 overflow-auto">
      <h2
        className={`font-bold text-gray-800 ${style.paidTitle} text-sm lg:text-lg`}
      >
        {label}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="search relative">
          <input
            className="border-b-[1px] pr-5 block w-fit border-[#DCDFE4] outline-none"
            type="text"
            placeholder="ابحث هنا"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0">
            <Image src={searchIcon} alt="search" />
          </div>
        </div>
        <select
          className="pl-3 pr-2 py-2 rounded-lg border-[1px] border-[#E6E6E6] text-xs font-normal outline-none"
          defaultValue="حالة المنتج"
        >
          <option disabled>حالة المنتج</option>
          <option value="المصدر1">المصدر 1</option>
          <option value="المصدر2">المصدر 2</option>
          <option value="المصدر3">المصدر 3</option>
        </select>
        <button className="text-xs font-normal py-2 px-2 lg:px-4 bg-[#F5D446] rounded-lg hover:bg-[#F5D446BC] transition-all">
          تصدير
        </button>
        <button className=" py-[2px] px-1 bg-[#646464] rounded-lg hover:bg-[#646464BC] transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="28"
            viewBox="0 0 31 28"
            fill="none"
          >
            <path
              d="M11.4336 14H20.3604M15.897 9.53662V18.4634"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeadTableProducts;
