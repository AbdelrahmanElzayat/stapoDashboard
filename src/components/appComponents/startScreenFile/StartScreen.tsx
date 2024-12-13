"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImgIcon from "../../../assets/icons/uploadimg.svg";
import style from "../app.module.css";
const StartScreen = () => {
  const [selectedFileBg, setSelectedFileBg] = useState(null);
  const [selectedNameBg, setSelectedNameBg] = useState("");
  const handleFileBgChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFileBg(file);
    setSelectedNameBg(file.name);
    // setFieldValue("cv", file);
  };
  return (
    <div className="rounded-[14px] p-5 border-[1px] border-[#E6E6E6] mt-4 h-full flex flex-col">
      <h4 className="font-bold text-sm lg:text-lg text-[#414141]">
        شاشة البداية للتطبيق
      </h4>
      <div
        className={`${style.fileupload} ${style.bgupload} flex-grow mt-4 border border-[#D0D0D0] border-dashed text-center flex flex-col items-center justify-center gap-1 rounded-[10px] w-full`}
      >
        <Image src={ImgIcon} alt="upload" />
        <h3 className="font-bold capitalize text-center text-textPrimary">
          {selectedNameBg ? selectedNameBg : "الخلفية"}
        </h3>
        <p className="text-sm font-normal opacity-[.38] text-center">
          jpeg, jpg or png
        </p>
        <input
          type="file"
          name="cv"
          onChange={(event) => handleFileBgChange(event)}
        />
      </div>
    </div>
  );
};

export default StartScreen;
