import React from "react";
import FormData from "./FormData";
import Socialnfo from "./Socialnfo";

const StoreInfo = () => {
  return (
    <div className="rounded-[14px] p-5 border-[1px] border-[#E6E6E6] mt-4">
      <h4 className="font-bold text-sm text-[#414141]">هوية المتجر</h4>
      <div className="storeInfo flex flex-wrap items-start justify-between w-full">
        <FormData />
        <Socialnfo />
      </div>
    </div>
  );
};

export default StoreInfo;
