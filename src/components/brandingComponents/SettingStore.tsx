import React from "react";
import ChooseColor from "./ChooseColor";
import CooseImage from "./CooseImage";

const SettingStore = () => {
  return (
    <div className="rounded-[14px] p-5 border-[1px] border-[#E6E6E6] mt-4">
      <h4 className="font-bold text-sm text-[#414141]">هوية المتجر</h4>
      <div className="flex flex-wrap gap-4 items-end justify-between">
        <ChooseColor />
        <CooseImage />
      </div>
    </div>
  );
};

export default SettingStore;
