import React from "react";

const HeaderStatistics = () => {
  return (
    <div className="HeaderStatistics flex flex-col md:flex-row gap-4 justify-between mt-6 w-full">
      <div className="titlePage">
        <h1 className="text-textSecondary text-lg font-bold">الرئيسية</h1>
        <span className="text-[13px] text-textSecondary font-light">
          تصفـح المبيعـات و الطلبات الخاصة بمتجرك
        </span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 md:gap-20 gap-5">
        <div className="totalPay flex flex-col relative justify-center gap-1">
          <span className="absolute top-[50%] -translate-y-[50%] -right-5 w-1 h-8 bg-[#F3F6F5]"></span>
          <span className="text-xs text-textSecondary font-light">
            إجمالي المبيعات
          </span>
          <span className="text-sm font-semibold text-textSecondary">
            {"830,000"} ر.س
          </span>
        </div>
        <div className="totalReq flex flex-col relative justify-center gap-1">
          <span className="absolute top-[50%] -translate-y-[50%] -right-5 w-1 h-8 bg-[#F3F6F5]"></span>
          <span className="text-xs text-textSecondary font-light">
            إجمالي الطلبات
          </span>
          <span className="text-sm font-semibold text-textSecondary">
            {"53422"}
          </span>
        </div>
        <div className="totalCL flex flex-col relative justify-center gap-1">
          <span className="absolute top-[50%] -translate-y-[50%] -right-5 w-1 h-8 bg-[#F3F6F5]"></span>
          <span className="text-xs text-textSecondary font-light">
            عدد العملاء
          </span>
          <span className="text-sm font-semibold text-textSecondary">
            {"753422"}
          </span>
        </div>
        <div className="visits flex flex-col relative justify-center gap-1">
          <span className="absolute top-[50%] -translate-y-[50%] -right-5 w-1 h-8 bg-[#F3F6F5]"></span>
          <span className="text-xs text-textSecondary font-light">
            الزيارات
          </span>
          <span className="text-sm font-semibold text-textSecondary">
            {"839420"}
          </span>
        </div>
        <div className="flex flex-col relative justify-center gap-1">
          <span className="absolute top-[50%] -translate-y-[50%] -right-5 w-1 h-8 bg-[#F3F6F5]"></span>
          <span className="text-xs text-textSecondary font-light">
            معدل التحويل
          </span>
          <span className="text-sm font-semibold text-textSecondary">
            {"23"}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderStatistics;
